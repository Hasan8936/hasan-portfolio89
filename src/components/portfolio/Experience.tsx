import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Core Member",
      company: "Saturnalia - Thapar's Annual Techno-Cultural Fest",
      period: "Nov 2023 – Nov 2024",
      type: "Leadership Role",
      responsibilities: [
        "Managed event logistics for 5,000+ attendees",
        "Coordinated 15+ cross-functional teams",
        "Resolved operational challenges in real-time during 3-day festival",
        "Enhanced problem-solving skills through collaborative execution of 12+ technical events",
        "Developed effective communication strategies for seamless event execution"
      ],
      skills: ["Event Management", "Team Leadership", "Problem Solving", "Communication"]
    },
    {
      title: "Member",
      company: "Frosh - Admission Helping Society",
      period: "June 2023 – June 2024",
      type: "Student Organization",
      responsibilities: [
        "Led logistics for student admission initiatives reaching 1,200+ prospective students",
        "Designed 20+ promotional graphics for campus orientation programs",
        "Developed conflict resolution skills by addressing 50+ on-ground challenges",
        "Coordinated team strategies for effective student engagement",
        "Analyzed data to identify trends and improvement areas in admission initiatives"
      ],
      skills: ["Graphic Design", "Data Analysis", "Conflict Resolution", "Student Engagement"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering",
      institution: "Thapar Institute of Engineering and Technology",
      period: "2022 – 2026",
      status: "Current",
      focus: "Computer Science & Engineering"
    },
    {
      degree: "ISC (Class XII)",
      institution: "City Montessori School",
      period: "2019 – 2021",
      status: "Completed",
      focus: "Science Stream"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Experience & Education
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg">My Professional Journey</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Experience</h3>
              
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary bg-card/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline" className="text-primary border-primary">
                        {exp.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {exp.title}
                    </CardTitle>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Skills Developed:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Education</h3>
              
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-success bg-card/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge 
                        variant={edu.status === 'Current' ? 'default' : 'outline'}
                        className={edu.status === 'Current' ? 'bg-success text-white' : 'text-success border-success'}
                      >
                        {edu.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{edu.period}</span>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-success font-semibold">{edu.institution}</p>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Focus Area:</h4>
                      <p className="text-muted-foreground">{edu.focus}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Languages & Hobbies */}
              <div className="grid grid-cols-1 gap-6">
                <Card className="bg-purple-light/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold text-primary">Languages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["English", "Hindi", "Punjabi"].map((lang, index) => (
                        <Badge key={index} className="bg-primary text-primary-foreground">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-purple-light/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold text-primary">Hobbies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Reading", "Hiking", "Coding"].map((hobby, index) => (
                        <Badge key={index} variant="outline" className="text-primary border-primary">
                          {hobby}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;