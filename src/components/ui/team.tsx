import React, { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, User } from "lucide-react";

// Matches your DB Schema
interface TeamMember {
    id: string;
    name: string;
    role: string;
    category: 'Founders' | 'Engineering' | 'Mentors';
    image_url: string;
    linkedin_url?: string;
    university?: string;
    display_order: number;
}

const TeamSection = () => {
    const [team, setTeam] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeam = async () => {
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

    // Helper to render the new "Two-Tone" card design
    const renderCategorySection = (title: string, members: TeamMember[]) => {
        if (members.length === 0) return null;

        return (
            <div className="mb-24 last:mb-0">
                <div className="flex items-end justify-between mb-10 px-4 md:px-0">
                    <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h3>
                </div>
                
                <Carousel
                    opts={{
                        align: "start",
                        loop: false,
                        dragFree: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-6 pb-10">
                        {members.map((member) => (
                            <CarouselItem key={member.id} className="pl-6 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                {/* CUSTOM CARD DESIGN 
                                    Matches the provided HTML structure: rounded-32px, two-tone backgrounds
                                */}
                                <div className="group relative flex flex-col h-full rounded-[32px] overflow-hidden transition-transform duration-300 hover:-translate-y-2 cursor-default shadow-sm hover:shadow-md">
                                    
                                    {/* 1. Top Colored Section (Image Background) */}
                                    {/* Using #cbd7e3 (Light Steel Blue) as per design */}
                                    <div className="h-[280px] bg-[#cbd7e3] flex items-end justify-center overflow-hidden relative">
                                        {member.image_url ? (
                                            <img
                                                src={member.image_url}
                                                alt={member.name}
                                                className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-500">
                                                <User size={64} className="opacity-20" />
                                            </div>
                                        )}
                                    </div>

                                    {/* 2. Bottom Content Section */}
                                    {/* Using #f1f3f6 (Light Gray) as per design */}
                                    <div className="bg-[#f1f3f6] p-8 flex-grow flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-[20px] font-semibold text-gray-800 mb-1 leading-tight">
                                                {member.name}
                                            </h3>
                                            <p className="text-gray-500 text-[15px] font-medium">
                                                {member.role}
                                            </p>
                                            {member.university && (
                                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">
                                                    {member.university}
                                                </p>
                                            )}
                                        </div>

                                        {/* 3. Arrow Link */}
                                        {member.linkedin_url && (
                                            <a 
                                                href={member.linkedin_url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center mt-6 text-gray-600 hover:text-black transition-all group/link"
                                            >
                                                <span className="text-xl leading-none mr-3">—</span>
                                                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center group-hover/link:bg-white group-hover/link:border-black transition-all">
                                                    <ArrowRight className="w-4 h-4 transform group-hover/link:-rotate-45 transition-transform duration-300" />
                                                </div>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                    {/* Navigation Buttons aligned to the right */}
                    <div className="flex justify-end gap-3 mt-4 pr-4">
                        <CarouselPrevious className="static translate-y-0 border-gray-300 hover:bg-black hover:text-white transition-colors w-12 h-12 rounded-full" />
                        <CarouselNext className="static translate-y-0 border-gray-300 hover:bg-black hover:text-white transition-colors w-12 h-12 rounded-full" />
                    </div>
                </Carousel>
            </div>
        );
    };

    const founders = team.filter(m => m.category === 'Founders');
    const engineering = team.filter(m => m.category === 'Engineering');
    const mentors = team.filter(m => m.category === 'Mentors');

    if (loading) {
        return (
            <div className="w-full py-32 flex justify-center">
                <div className="animate-pulse flex space-x-6">
                    <div className="h-[400px] w-[300px] bg-gray-100 rounded-[32px]"></div>
                    <div className="h-[400px] w-[300px] bg-gray-100 rounded-[32px] hidden md:block"></div>
                    <div className="h-[400px] w-[300px] bg-gray-100 rounded-[32px] hidden lg:block"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full">
            {renderCategorySection("The Founders", founders)}
            {renderCategorySection("Engineering Core", engineering)}
            {renderCategorySection("Mentorship", mentors)}
        </div>
    );
};

export default TeamSection;
