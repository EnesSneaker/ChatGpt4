require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');

app.use(cors());

const facebookAdRoute = require('./routes/facebookAdRoute');
const googleAdRoute = require('./routes/googleAdRoute');
const instagramBioRoute = require('./routes/instagramBioRoute');
const instagramCaptionRoute = require('./routes/instagramCaptionRoute');
const emailAnswerRoute = require('./routes/emailAnswerRoute');
const teacherElementaryLessonRoute = require('./routes/teacherElementaryLessonRoute');
const teacherHighSchoolRoute = require('./routes/teacherHighSchoolRoute');
const cocktailDrinksRoute = require('./routes/cocktailDrinksRoute');
const mealRoute = require('./routes/mealRoute');


app.use(express.json());
app.use('/api', facebookAdRoute);
app.use('/api', googleAdRoute);
app.use('/api', instagramBioRoute);
app.use('/api', instagramCaptionRoute);
app.use('/api', emailAnswerRoute);
app.use('/api', teacherElementaryLessonRoute);
app.use('/api', teacherHighSchoolRoute);
app.use('/api', cocktailDrinksRoute);
app.use('/api', mealRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
