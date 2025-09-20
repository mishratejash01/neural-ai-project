import React from 'react';

// --- Import Founder Images ---
import tejashAvatar from '@/assets/images/tejash-mishra.jpeg';
import roshanAvatar from '@/assets/images/roshan-singh.jpeg';

// --- Import Engineering Team Images ---
import srijanAvatar from '@/assets/images/srijan-anand.jpeg';
import harshilAvatar from '@/assets/images/harshil-handoo.jpeg';
import jaydevAvatar from '@/assets/images/jaydev-paul.jpeg';
import phalgunAvatar from '@/assets/images/phalgun-praveen.jpeg';

// --- Import Mentor Images ---
import saurabhAvatar from '@/assets/images/dr-saurabh-shanu.jpeg';

const leadership = [
    {
        name: 'Tejash Mishra',
        role: 'Co-Founder',
        avatar: tejashAvatar,
    },
    {
        name: 'Roshan Singh',
        role: 'Co-Founder',
        avatar: roshanAvatar,
    },
];

const engineering = [
    {
        name: 'Srijan Anand',
        role: 'Technical Head',
        avatar: srijanAvatar,
    },
    {
        name: 'Harshil Handoo',
        role: 'AI ML Engineer',
        avatar: harshilAvatar,
    },
    {
        name: 'Jaydev Paul',
        role: 'AI ML Engineer',
        avatar: jaydevAvatar,
    },
    {
        name: 'Phalgun Praveen',
        role: 'AI ML Engineer',
        avatar: phalgunAvatar,
    },
];

const mentors = [
    {
        name: 'Dr. Saurabh Shanu',
        role: 'Mentor',
        avatar: saurabhAvatar,
    },
];

const TeamSection = () => {
    return (
        <section className="py-12 md:py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl text-center">
                    Meet Our <span className="text-gradient">Expert Team</span>
                </h2>

                <div>
                    <h3 className="mb-6 text-2xl font-semibold text-center text-primary">Our Team</h3>
                    <div className="grid grid-cols-2 gap-8 border-t py-6 md:grid-cols-2">
                        {leadership.map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-background size-32 rounded-full border p-1 shadow shadow-zinc-950/5 mx-auto">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-4 block text-lg font-semibold">{member.name}</span>
                                <span className="text-muted-foreground block text-sm">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="mb-6 text-2xl font-semibold text-center text-primary">The Team</h3>
                    <div className="grid grid-cols-2 gap-8 border-t py-6 md:grid-cols-4">
                        {engineering.map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-background size-24 rounded-full border p-1 shadow shadow-zinc-950/5 mx-auto">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-3 block text-md font-medium">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="mb-6 text-2xl font-semibold text-center text-primary">Mentors</h3>
                    <div className="grid grid-cols-1 gap-8 border-t py-6 md:grid-cols-1 justify-items-center">
                        {mentors.map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-background size-32 rounded-full border p-1 shadow shadow-zinc-950/5 mx-auto">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-4 block text-lg font-semibold">{member.name}</span>
                                <span className="text-muted-foreground block text-sm">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
