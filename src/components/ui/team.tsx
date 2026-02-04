import React, { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, User } from "lucide-react";

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

    // Helper to render a carousel section for a specific category
    const renderCategorySection = (title: string, members: TeamMember[]) => {
        if (members.length === 0) return null;

        return (
            <div className="mb-20 last:mb-0">
                <div className="flex items-end justify-between mb-8 px-2">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h3>
                    {/* Optional: Add a 'view all' link or count here if needed */}
                </div>
                
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                        dragFree: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4 pb-4">
                        {members.map((member) => (
                            <CarouselItem key={member.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <div className="h-full">
                                    <Card className="h-full border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group bg-white overflow-hidden rounded-3xl">
                                        {/* Image Container */}
                                        <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-50">
                                            {member.image_url ? (
                                                <img
                                                    src={member.image_url}
                                                    alt={member.name}
                                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="h-full w-full flex items-center justify-center text-gray-300">
                                                    <User size={48} />
                                                </div>
                                            )}
                                            
                                            {/* Hover Overlay with Socials */}
                                            {member.linkedin_url && (
                                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                                    <a
                                                        href={member.linkedin_url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="p-3 bg-white rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg"
                                                    >
                                                        <Linkedin size={20} strokeWidth={2.5} />
                                                    </a>
                                                </div>
                                            )}
                                        </div>

                                        {/* Card Content */}
                                        <CardContent className="p-6 text-center">
                                            <h4 className="text-lg font-extrabold text-gray-900 mb-1">{member.name}</h4>
                                            <p className="text-sm font-medium text-blue-600 mb-3">{member.role}</p>
                                            
                                            {member.university && (
                                                <div className="inline-block px-2 py-1 bg-gray-50 rounded-md border border-gray-100">
                                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                                        {member.university}
                                                    </p>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                    {/* Navigation Buttons */}
                    <div className="flex justify-end gap-3 mt-4 pr-2">
                        <CarouselPrevious className="static translate-y-0 border-gray-200 hover:bg-white hover:border-blue-200 hover:text-blue-600" />
                        <CarouselNext className="static translate-y-0 border-gray-200 hover:bg-white hover:border-blue-200 hover:text-blue-600" />
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
            <div className="w-full py-20 flex justify-center">
                <div className="animate-pulse flex space-x-4">
                    <div className="h-64 w-48 bg-gray-100 rounded-2xl"></div>
                    <div className="h-64 w-48 bg-gray-100 rounded-2xl hidden md:block"></div>
                    <div className="h-64 w-48 bg-gray-100 rounded-2xl hidden lg:block"></div>
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
