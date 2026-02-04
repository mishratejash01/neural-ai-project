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

    const renderCategorySection = (title: string, members: TeamMember[], description: string) => {
        if (members.length === 0) return null;

        return (
            <div className="mb-32 last:mb-0">
                {/* Header: Aligned with the card grid via padding */}
                <div className="mb-12 border-b border-gray-100 pb-6">
                    <h3 className="text-4xl font-extrabold tracking-tight text-gray-900">{title}</h3>
                    <p className="text-gray-500 mt-3 text-lg max-w-2xl font-normal">{description}</p>
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
                                {/* CARD DESIGN: Static (No Hover Effects) */}
                                <div className="flex flex-col h-full rounded-[32px] overflow-hidden bg-[#f1f3f6]">
                                    
                                    {/* 1. Image Container (Top) */}
                                    <div className="h-[340px] bg-[#cbd7e3] flex items-end justify-center overflow-hidden relative">
                                        {member.image_url ? (
                                            <img
                                                src={member.image_url}
                                                alt={member.name}
                                                // Static Grayscale + Contrast to match the reference HTML styling
                                                className="w-full h-full object-cover object-top filter grayscale contrast-[1.05]"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                <User size={80} className="opacity-20" />
                                            </div>
                                        )}
                                    </div>

                                    {/* 2. Content Container (Bottom) */}
                                    <div className="p-8 flex-grow flex flex-col">
                                        <div className="mb-auto">
                                            {/* NAME: Big & Semi-Bold */}
                                            <h3 className="text-2xl font-semibold text-gray-900 mb-2 leading-tight">
                                                {member.name}
                                            </h3>
                                            
                                            {/* ROLE: Non-Bold (Normal), Gray, Smaller than Name */}
                                            <p className="text-gray-500 text-base font-normal">
                                                {member.role}
                                            </p>
                                            
                                            {/* UNIVERSITY: Small, clean */}
                                            {member.university && (
                                                <p className="text-[11px] text-blue-600 font-medium uppercase tracking-widest mt-4">
                                                    {member.university}
                                                </p>
                                            )}
                                        </div>

                                        {/* 3. Arrow Link (Static) */}
                                        {member.linkedin_url && (
                                            <a 
                                                href={member.linkedin_url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center mt-10 text-gray-400 hover:text-gray-900 transition-colors"
                                            >
                                                <span className="text-xl leading-none mr-3 font-light">—</span>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                    {/* Navigation Buttons */}
                    <div className="flex justify-end gap-4 mt-4">
                        <CarouselPrevious className="static translate-y-0 border-gray-200 bg-transparent hover:bg-black hover:border-black hover:text-white transition-all w-12 h-12 rounded-full" />
                        <CarouselNext className="static translate-y-0 border-gray-200 bg-transparent hover:bg-black hover:border-black hover:text-white transition-all w-12 h-12 rounded-full" />
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
            <div className="w-full py-32 flex justify-center px-8 md:px-16">
                <div className="animate-pulse flex space-x-8 w-full overflow-hidden">
                    <div className="h-[500px] w-1/3 bg-gray-100 rounded-[32px]"></div>
                    <div className="h-[500px] w-1/3 bg-gray-100 rounded-[32px] hidden md:block"></div>
                    <div className="h-[500px] w-1/3 bg-gray-100 rounded-[32px] hidden lg:block"></div>
                </div>
            </div>
        );
    }

    return (
        // Enforce Inter font + Global Padding Alignment
        <div className="w-full px-8 md:px-16 font-['Inter']">
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
