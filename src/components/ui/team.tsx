import React, { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { User } from "lucide-react";

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

    // Helper to render the EXACT card design from the HTML provided
    const renderCategorySection = (title: string, members: TeamMember[], description: string) => {
        if (members.length === 0) return null;

        return (
            <div className="mb-24 last:mb-0">
                {/* Section Header */}
                <div className="mb-10 border-b border-slate-100 pb-4">
                    <h3 className="text-3xl font-extrabold tracking-tight text-gray-900">{title}</h3>
                    <p className="text-gray-500 mt-2 text-lg">{description}</p>
                </div>
                
                <Carousel
                    opts={{
                        align: "start",
                        loop: false,
                        dragFree: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-8 pb-10">
                        {members.map((member) => (
                            <CarouselItem key={member.id} className="pl-8 md:basis-1/2 lg:basis-1/3 xl:basis-1/3">
                                {/* CUSTOM CARD STRUCTURE MATCHING REFERENCE HTML 
                                   - rounded-[32px]
                                   - Two-tone background (#cbd7e3 top, #f1f3f6 bottom)
                                   - Grayscale image
                                */}
                                <div className="group relative flex flex-col h-full rounded-[32px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-[#f1f3f6]">
                                    
                                    {/* Top: Image Background (#cbd7e3) */}
                                    <div className="h-[280px] bg-[#cbd7e3] flex items-end justify-center overflow-hidden">
                                        {member.image_url ? (
                                            <img
                                                src={member.image_url}
                                                alt={member.name}
                                                className="w-full h-full object-cover object-top filter grayscale contrast-105 transition-all duration-300 group-hover:grayscale-0 group-hover:contrast-100"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                <User size={64} className="opacity-20" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Bottom: Content Background (#f1f3f6) */}
                                    <div className="p-8 flex-grow flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight">
                                                {member.name}
                                            </h3>
                                            <p className="text-gray-500 text-sm font-medium">
                                                {member.role}
                                            </p>
                                            {/* University Badge if exists */}
                                            {member.university && (
                                                <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest mt-3">
                                                    {member.university}
                                                </p>
                                            )}
                                        </div>

                                        {/* Arrow Link Structure */}
                                        {member.linkedin_url && (
                                            <a 
                                                href={member.linkedin_url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center mt-6 text-gray-500 transition-all hover:text-black hover:gap-2"
                                            >
                                                <span className="text-xl leading-none mr-2">—</span>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/>
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                    {/* Minimal Navigation Buttons */}
                    <div className="flex justify-end gap-3 mt-2 pr-4">
                        <CarouselPrevious className="static translate-y-0 border-gray-300 hover:bg-black hover:text-white transition-colors w-10 h-10 rounded-full" />
                        <CarouselNext className="static translate-y-0 border-gray-300 hover:bg-black hover:text-white transition-colors w-10 h-10 rounded-full" />
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
                <div className="animate-pulse flex space-x-8">
                    <div className="h-[450px] w-[350px] bg-gray-100 rounded-[32px]"></div>
                    <div className="h-[450px] w-[350px] bg-gray-100 rounded-[32px] hidden md:block"></div>
                    <div className="h-[450px] w-[350px] bg-gray-100 rounded-[32px] hidden lg:block"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full">
            {renderCategorySection(
                "Leadership", 
                founders, 
                "The visionaries guiding our mission."
            )}
            {renderCategorySection(
                "Research & Engineering", 
                engineering, 
                "Specializing in LLMs and Neural Optimization."
            )}
            {renderCategorySection(
                "Mentorship", 
                mentors, 
                "Academic and Industry experts shaping our path."
            )}
        </div>
    );
};

export default TeamSection;
