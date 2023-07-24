import React from 'react';
import TextGenerator from '../components/TextGenerator';

const TeacherHighSchoolLesson = () => {
  return (
    <div>
      <h2>Teacher High School lesson Generator</h2>
      <TextGenerator apiUrl="http://localhost:8080/api/teacher-high-school-lesson" />
    </div>
  );
};

export default TeacherHighSchoolLesson;
