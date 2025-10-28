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
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
    </svg>;
const leadership = [{
  name: 'Tejash Mishra',
  role: 'Co-Founder',
  avatar: tejashAvatar,
  linkedin: 'https://www.linkedin.com/in/tejashmishra'
}, {
  name: 'Roshan Singh',
  role: 'Co-Founder',
  avatar: roshanAvatar,
  linkedin: 'https://www.linkedin.com/in/roshansingh-'
}];
const engineering = [{
  name: 'Srijan Anand',
  role: 'Technical Head',
  university: 'IIT KANPUR',
  avatar: srijanAvatar
}, {
  name: 'Harshil Handoo',
  role: 'AI ML Engineer',
  university: 'IIIT DELHI',
  avatar: harshilAvatar
}, {
  name: 'Jaydev Paul',
  role: 'AI ML Engineer',
  university: 'NIT PODUCHERRY',
  avatar: jaydevAvatar
}, {
  name: 'Phalgun Praveen',
  role: 'AI ML Engineer',
  university: 'NIT ROURKELA',
  avatar: phalgunAvatar
}];
const mentors = [{
  name: 'Dr. Saurabh Shanu',
  role: 'Mentor',
  avatar: saurabhAvatar
}];
const TeamSection = () => {
  return <section className="py-12 md:py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl text-center">
                    Meet Our <span className="text-gradient">Expert Team</span>
                </h2>

                <div>
                    
                    
                </div>

                <div className="mt-12">
                    <h3 className="mb-6 text-2xl font-semibold text-center text-primary">The Team</h3>
                    <div className="grid grid-cols-2 gap-8 border-t py-6 md:grid-cols-4">
                        {engineering.map((member, index) => <div key={index} className="text-center">
                                <div className="bg-background size-24 rounded-full border p-1 shadow shadow-zinc-950/5 mx-auto">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-3 block text-md font-medium">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                                <span className="text-muted-foreground block text-xs">{member.university}</span>
                            </div>)}
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="mb-6 text-2xl font-semibold text-center text-primary">Mentors</h3>
                    <div className="grid grid-cols-1 gap-8 border-t py-6 md:grid-cols-1 justify-items-center">
                        {mentors.map((member, index) => <div key={index} className="text-center">
                                <div className="bg-background size-32 rounded-full border p-1 shadow shadow-zinc-950/5 mx-auto">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-4 block text-lg font-semibold">{member.name}</span>
                                <span className="text-muted-foreground block text-sm">{member.role}</span>
                            </div>)}
                    </div>
                </div>
            </div>
        </section>;
};
export default TeamSection;