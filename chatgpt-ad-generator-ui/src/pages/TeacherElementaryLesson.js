import React from 'react';
import TextGenerator from '../components/TextGenerator';

const TeacherElementaryLesson = () => {
  return (
    <div>
      <h2>Teacher Elementary lesson Generator</h2>
      <TextGenerator apiUrl="http://localhost:8080/api/teacher-elementary-lesson" />
    </div>
  );
};

export default TeacherElementaryLesson;
