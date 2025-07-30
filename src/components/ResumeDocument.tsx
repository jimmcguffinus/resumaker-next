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
    padding: 40,
    fontFamily: 'Inter',
    fontSize: 10,
    lineHeight: 1.4,
    color: '#334155', // slate-700
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
    borderBottom: '1px solid #e2e8f0', // slate-200
    paddingBottom: 15,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e293b', // slate-800
    marginBottom: 8,
  },
  tagline: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#64748b', // slate-500
    marginBottom: 12,
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 10,
    fontSize: 9,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0f172a', // slate-900
    marginBottom: 10,
    borderBottom: '1px solid #cbd5e1', // slate-300
    paddingBottom: 3,
  },
  section: {
    marginBottom: 15,
  },
  experienceEntry: {
    marginBottom: 15,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  companyName: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  tenure: {
    fontSize: 10,
    fontStyle: 'italic',
    color: '#64748b',
  },
  jobTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  jobDescription: {
    marginBottom: 6,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 4,
  },
  skillTag: {
    backgroundColor: '#e2e8f0',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 8,
  },
  educationEntry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  institution: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  degree: {
    fontSize: 10,
  },
  extrasList: {
    paddingLeft: 10,
  },
  extraItem: {
    marginBottom: 3,
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
              <View key={j} style={{ marginLeft: 10, marginTop: 5 }}>
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