import React from 'react';
import { 
  Page, 
  Text, 
  View, 
  Document, 
  StyleSheet, 
  Font,
  Image 
} from '@react-pdf/renderer';

// Register emoji source for proper emoji rendering
Font.registerEmojiSource({
  format: 'png',
  url: 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/',
});

// Register custom fonts if needed
Font.register({
  family: 'Inter',
  src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2',
});

// Create styles for 8.5x11 paper
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40,
    fontFamily: 'Inter, Helvetica, Arial, sans-serif',
    fontSize: 10,
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 20,
    borderBottom: '1px solid #e5e7eb',
    paddingBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#1f2937',
  },
  tagline: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#6b7280',
    marginBottom: 10,
  },
  contactInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    marginBottom: 5,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  contactText: {
    fontSize: 10,
    color: '#374151',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
    borderBottom: '1px solid #e5e7eb',
    paddingBottom: 3,
  },
  experienceItem: {
    marginBottom: 12,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1f2937',
    flex: 1,
  },
  jobDuration: {
    fontSize: 10,
    color: '#6b7280',
    fontStyle: 'italic',
  },
  companyName: {
    fontSize: 11,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 3,
  },
  jobDescription: {
    fontSize: 10,
    color: '#4b5563',
    marginTop: 5,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 5,
  },
  skillTag: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    fontSize: 9,
    color: '#374151',
  },
  educationItem: {
    marginBottom: 10,
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 3,
  },
  institutionName: {
    fontSize: 11,
    fontWeight: '600',
    color: '#374151',
    flex: 1,
  },
  educationYear: {
    fontSize: 10,
    color: '#6b7280',
  },
  degreeInfo: {
    fontSize: 10,
    color: '#4b5563',
    fontStyle: 'italic',
  },
  extrasSection: {
    marginTop: 15,
  },
  extraItem: {
    fontSize: 10,
    color: '#4b5563',
    marginBottom: 3,
  },
});

interface ContactInfo {
  phone: string;
  email: string;
}

interface Location {
  city: string;
  state: string;
}

interface SoftwareJob {
  title: string;
  description: string;
  skills: string[];
  languages: string[];
}

interface Workplace {
  name: string;
  link: string;
  blurb: string;
  tenure: string;
  jobs: SoftwareJob[];
}

interface EducationRecord {
  institution: string;
  link: string;
  year: string;
  degree: string;
}

interface ResumeData {
  header: {
    name: string;
    tagline: string;
    contact: ContactInfo;
    location: Location;
  };
  experience: Workplace[];
  education: EducationRecord[];
  skills: string[];
  extras: string[];
}

interface ResumeDocumentProps {
  data: ResumeData;
}

export const ResumeDocument: React.FC<ResumeDocumentProps> = ({ data }) => (
  <Document>
    <Page size="LETTER" style={styles.page}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.name}>{data.header?.name || 'Your Name'}</Text>
        <Text style={styles.tagline}>{data.header?.tagline || 'Your Professional Title'}</Text>
        
        <View style={styles.contactInfo}>
          {data.header?.contact?.email && (
            <View style={styles.contactItem}>
              <Text style={styles.contactText}>📧 {data.header.contact.email}</Text>
            </View>
          )}
          {data.header?.contact?.phone && (
            <View style={styles.contactItem}>
              <Text style={styles.contactText}>📱 {data.header.contact.phone}</Text>
            </View>
          )}
          {(data.header?.location?.city || data.header?.location?.state) && (
            <View style={styles.contactItem}>
              <Text style={styles.contactText}>
                📍 {[data.header.location.city, data.header.location.state].filter(Boolean).join(', ')}
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* Experience Section */}
      {data.experience && data.experience.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💼 Experience</Text>
          {data.experience.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <View style={styles.jobHeader}>
                <Text style={styles.companyName}>{exp.name}</Text>
                {exp.tenure && <Text style={styles.jobDuration}>{exp.tenure}</Text>}
              </View>
              
              {exp.jobs && exp.jobs.map((job, jobIndex) => (
                <View key={jobIndex}>
                  <Text style={styles.jobTitle}>{job.title}</Text>
                  {job.description && (
                    <Text style={styles.jobDescription}>{job.description}</Text>
                  )}
                  {(job.skills?.length > 0 || job.languages?.length > 0) && (
                    <View style={styles.skillsContainer}>
                      {job.skills?.map((skill, skillIndex) => (
                        <Text key={skillIndex} style={styles.skillTag}>{skill}</Text>
                      ))}
                      {job.languages?.map((lang, langIndex) => (
                        <Text key={langIndex} style={styles.skillTag}>{lang}</Text>
                      ))}
                    </View>
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
      )}

      {/* Education Section */}
      {data.education && data.education.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎓 Education</Text>
          {data.education.map((edu, index) => (
            <View key={index} style={styles.educationItem}>
              <View style={styles.educationHeader}>
                <Text style={styles.institutionName}>{edu.institution}</Text>
                {edu.year && <Text style={styles.educationYear}>{edu.year}</Text>}
              </View>
              {edu.degree && <Text style={styles.degreeInfo}>{edu.degree}</Text>}
            </View>
          ))}
        </View>
      )}

      {/* Skills Section */}
      {data.skills && data.skills.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>⚡ Skills</Text>
          <View style={styles.skillsContainer}>
            {data.skills.map((skill, index) => (
              <Text key={index} style={styles.skillTag}>{skill}</Text>
            ))}
          </View>
        </View>
      )}

      {/* Additional Information */}
      {data.extras && data.extras.length > 0 && (
        <View style={styles.extrasSection}>
          <Text style={styles.sectionTitle}>🏆 Additional Information</Text>
          {data.extras.map((extra, index) => (
            <Text key={index} style={styles.extraItem}>• {extra}</Text>
          ))}
        </View>
      )}
    </Page>
  </Document>
); 