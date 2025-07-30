'use client';

import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Link,
} from '@react-pdf/renderer';

// TypeScript interfaces
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

interface Resume {
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
  data: Resume;
}

// Register Inter fonts from local files
Font.register({
  family: 'Inter',
  fonts: [
    { src: '/fonts/Inter-Regular.ttf' },
    { src: '/fonts/Inter-Bold.ttf', fontWeight: 'bold' },
    { src: '/fonts/Inter-Italic.ttf', fontStyle: 'italic' },
  ],
});

Font.registerEmojiSource({
  format: 'png',
  url: 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/',
});

const styles = StyleSheet.create({
  page: {
    padding: '0.5in',
    fontFamily: 'Inter',
    fontSize: 10,
    lineHeight: 1.4,
    color: '#334155', // slate-700
  },
  header: {
    textAlign: 'center',
    marginBottom: 24,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b', // slate-800
    marginBottom: 16, // <-- INCREASED FROM 8 to 16
  },
  tagline: {
    fontSize: 11,
    fontStyle: 'italic',
    color: '#475569', // slate-600
    marginTop: 0,      // <-- REMOVED a marginTop to have one source of spacing
    marginBottom: 16,  // <-- INCREASED FROM 12 to 16
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 12,
    fontSize: 9,
    color: '#475569',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0f172a', // slate-900
    marginBottom: 12,
    paddingBottom: 4,
    borderBottomWidth: 1.5,
    borderColor: '#e2e8f0', // slate-200
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    marginBottom: 16,
  },
  experienceEntry: {
    marginBottom: 16,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  companyName: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  tenure: {
    fontSize: 10,
    color: '#64748b', // slate-500
  },
  jobEntry: {
    marginTop: 4,
    paddingLeft: 10,
  },
  jobTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#334155',
  },
  jobDescription: {
    marginTop: 2,
    color: '#475569',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginTop: 6,
  },
  skillTag: {
    backgroundColor: '#f1f5f9', // slate-100
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 5,
    fontSize: 8,
    fontWeight: 'bold',
    color: '#475569',
  },
  educationEntry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  institution: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  degree: {
    fontSize: 10,
    fontStyle: 'italic',
  },
  extrasList: {
    paddingLeft: 12,
  },
  extraItem: {
    marginBottom: 4,
  },
});

export const ResumeDocument: React.FC<ResumeDocumentProps> = ({ data }) => (
  <Document author={data?.header?.name || 'User'} title={`Resume for ${data?.header?.name}`}>
    <Page size="LETTER" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{data.header.name}</Text>
        <Text style={styles.tagline}>{data.header.tagline}</Text>
        <View style={styles.contactInfo}>
          <Link src={`mailto:${data.header.contact.email}`}>
            <Text>📧 {data.header.contact.email}</Text>
          </Link>
          <Link src={`tel:${data.header.contact.phone}`}>
            <Text>📱 {data.header.contact.phone}</Text>
          </Link>
          <Text>📍 {data.header.location.city}, {data.header.location.state}</Text>
        </View>
      </View>

      {/* Experience */}
      <Text style={styles.sectionTitle}>💼 Experience</Text>
      <View style={styles.section}>
        {data.experience.map((exp, i) => (
          <View key={i} style={styles.experienceEntry}>
            <View style={styles.entryHeader}>
              <Text style={styles.companyName}>{exp.name}</Text>
              <Text style={styles.tenure}>{exp.tenure}</Text>
            </View>
                         {exp.jobs.map((job, j) => (
               <View key={j} style={styles.jobEntry}>
                 <Text style={styles.jobTitle}>{job.title}</Text>
                 <Text style={styles.jobDescription}>{job.description}</Text>
                 {job.skills && job.skills.length > 0 && (
                   <View style={styles.skillsContainer}>
                     {job.skills.map((skill, k) => (
                       <Text key={k} style={styles.skillTag}>{skill}</Text>
                     ))}
                   </View>
                 )}
               </View>
             ))}
          </View>
        ))}
      </View>

      {/* Education */}
      <Text style={styles.sectionTitle}>🎓 Education</Text>
      <View style={styles.section}>
        {data.education.map((edu, i) => (
          <View key={i} style={styles.educationEntry}>
            <View>
              <Text style={styles.institution}>{edu.institution}</Text>
              <Text style={styles.degree}>{edu.degree}</Text>
            </View>
            <Text style={styles.tenure}>{edu.year}</Text>
          </View>
        ))}
      </View>

      {/* Skills */}
      <Text style={styles.sectionTitle}>⚡ Skills</Text>
      <View style={[styles.section, styles.skillsContainer]}>
        {data.skills.map((skill, i) => (
          <Text key={i} style={styles.skillTag}>{skill}</Text>
        ))}
      </View>

      {/* Extras */}
      <Text style={styles.sectionTitle}>🏆 Additional Information</Text>
      <View style={[styles.section, styles.extrasList]}>
        {data.extras.map((extra, i) => (
          <Text key={i} style={styles.extraItem}>• {extra}</Text>
        ))}
      </View>
    </Page>
  </Document>
); 