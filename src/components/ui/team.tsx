import React, { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";

// Matches your DB Schema exactly
interface TeamMember {
    id: string;
    name: string;
    role: string;
    category: 'Founders' | 'Engineering' | 'Mentors'; // Capitalized to match your SQL check constraint
    image_url: string;
    linkedin_url?: string;
    university?: string;
    display_order: number;
}

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
    </svg>
);

const TeamSection = () => {
    const [team, setTeam] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeam = async () => {
            // Order by 'display_order' as per your schema
            const { data, error } = await supabase
                .from('team_members')
                .select('*')
                .order('display_order', { ascending: true });

            if (error) {
                console.error("Error fetching team:", error);
            } else if (data) {
                setTeam(data as TeamMember[]);
            }
            setLoading(false);
        };

        fetchTeam();
    }, []);

    // Filter using the Capitalized categories from your DB Check constraint
    const founders = team.filter(m => m.category === 'Founders');
    const engineering = team.filter(m => m.category === 'Engineering');
    const mentors = team.filter(m => m.category === 'Mentors');

    if (loading) {
        return <div className="text-center py-20 text-gray-400 animate-pulse">Loading expert team...</div>;
    }

    return (
        <div className="w-full">
            <div className="mx-auto max-w-5xl px-4 lg:px-0">
                
                {/* 1. Founders Section */}
                {founders.length > 0 && (
                    <div className="mb-20">
                        <h3 className="mb-10 text-2xl font-bold text-center text-gray-900 tracking-tight">The Founders</h3>
                        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
                            {founders.map((member) => (
                                <div key={member.id} className="text-center group">
                                    <div className="relative mb-6 mx-auto w-40 h-40">
                                        <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                                        <img 
                                            className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-500" 
                                            src={member.image_url} 
                                            alt={member.name}
                                            loading="lazy"
                                        />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                                    <p className="text-blue-600 font-medium text-sm mt-1">{member.role}</p>
                                    <p className="text-gray-400 text-[10px] font-bold tracking-widest mt-1 uppercase">IIT MADRAS</p>
                                    {member.linkedin_url && (
                                        <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-gray-400 hover:text-blue-600 transition-colors">
                                            <LinkedinIcon />
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 2. Engineering Section */}
                {engineering.length > 0 && (
                    <div className="mb-20 border-t border-gray-100 pt-20">
                        <h3 className="mb-10 text-2xl font-bold text-center text-gray-900 tracking-tight">Engineering Core</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-16">
                            {engineering.map((member) => (
                                <div key={member.id} className="text-center group">
                                    <div className="w-28 h-28 mx-auto mb-5 rounded-full p-1 border border-gray-100 bg-white shadow-sm group-hover:shadow-md transition-all duration-300">
                                        <img 
                                            className="w-full h-full rounded-full object-cover" 
                                            src={member.image_url} 
                                            alt={member.name}
                                            loading="lazy"
                                        />
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
                                    <p className="text-gray-500 text-sm mb-1">{member.role}</p>
                                    {member.university && (
                                        <p className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">{member.university}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 3. Mentors Section */}
                {mentors.length > 0 && (
                    <div className="border-t border-gray-100 pt-20">
                        <h3 className="mb-10 text-2xl font-bold text-center text-gray-900 tracking-tight">Mentorship</h3>
                        <div className="flex justify-center flex-wrap gap-16">
                            {mentors.map((member) => (
                                <div key={member.id} className="text-center group">
                                    <div className="w-32 h-32 mx-auto mb-6 rounded-full p-1 border-2 border-blue-50 bg-white shadow-sm group-hover:border-blue-200 transition-colors">
                                        <img 
                                            className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                                            src={member.image_url} 
                                            alt={member.name}
                                            loading="lazy"
                                        />
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                                    <p className="text-blue-600 font-medium">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeamSection;
