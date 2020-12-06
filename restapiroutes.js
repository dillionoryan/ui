const express= require('express');

const router= express.Router();

const fs= require('fs')
let rawdata= fs.readFileSync('./courses.json');
let coursejson= JSON.parse(rawdata);
//define routes
router.get('/', (req, res) =>{
  let outputJSON= {
    coursedata: coursejson["courses"]
  }
  res.json(outputJSON);
})


router.get('/by_coursecode/:qcode', (req, res)=> {
  let coursecode= req.params['qcode']

  filtered_courses= coursejson["courses"].filter(q => q.course_code.includes(coursecode))
  let outputJSON= {
    coursedata: filtered_courses
  }
  res.json(outputJSON);
})

router.get('/by_courselevel/undergraduate', (req, res)=> {
  let gradlevel= req.params['undergraduate']

  filtered_courses= coursejson["courses"].filter(q => q.course_level.includes('Undergraduate'))

  let outputJSON= {
    coursedata: filtered_courses
  }
  res.json(outputJSON);
})

router.get('/by_courselevel/graduate', (req, res)=> {
  let gradlevel= req.params['graduate']

  filtered_courses=coursejson["courses"].filter(q=>{
    if((q.course_level.includes("Graduate"))&&(!q.course_level.includes("under"))){
      return true;
    }
    return false;
  })

  let outputJSON= {
    coursedata: filtered_courses
  }
  res.json(outputJSON);
})

router.get('/by_coursetitle/:qtitle', (req, res)=> {
  let coursetitle= req.params['qtitle']

  filtered_courses= coursejson["courses"].filter(q => q.title.includes(coursetitle))
  let outputJSON= {
    coursedata: filtered_courses
  }
  res.json(outputJSON);
})

router.get('/by_courseprofessor/:qprof', (req, res)=> {
  let courseinstructor= req.params['qprof']

  filtered_courses= coursejson["courses"].filter(q => q.instructor.includes(courseinstructor))
  let outputJSON= {
    coursedata: filtered_courses
  }
  res.json(outputJSON);
})


module.exports= router;
