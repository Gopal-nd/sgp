import React from 'react'
import { useState } from 'react'

const Sem8 = () => {
  const[mark, setMarks]=useState([]);
  const[markvalue, setMarkvalue]=useState();
  const[show,setShow] = useState();


  const Check = ()=>{
 
    let sum =0
    var value =[ document.getElementById("sub1").value, document.getElementById("sub2").value, document.getElementById("sub3").value];
  

    let val = [3,3,10];
    for (var i=0; i<8;i++){
        if(value[i]>=90){
            sum+=val[i]*10
        }
        else if(value[i]>=80 && value[i]<90){
            sum+=val[i]*9
        }
        else if(value[i]>=70 && value[i]<80){
            sum+=val[i]*8
        }
        else if(value[i]>=60 && value[i]<70){
            sum+=val[i]*7
        }
        else if(value[i]>=50 && value[i]<60){
            sum+=val[i]*6
        }
        else if(value[i]>=40 && value[i]<45){
            sum+=val[i]*5
        }
        else if(value[i]>=45 && value[i]<40){
            sum+=val[i]*4
        }
        else if(value[i]<40){
            sum+=val[i]*0
        }
    }    
    var ans=sum/16;
    setShow(<h1 id = "ans">Your Sgpa {ans.toFixed(2) }</h1>);
 document.getElementById("ans").innerHTML="Your Sgpa = "+ans.toFixed(2);

  }
  return (<>
    <h1>2022 Scheme <span className='sp'>8th Sem SGPA</span> Calculator</h1>
    <div className='main'>
     
      <div className='card'>
        <label htmlFor="Maths">Professional Elective (Online Courses) Only through
NPTEL </label><br />
        <input type="numbre" placeholder='Credits - 3x' maxLength={3} onChange={(e)=>setMarkvalue(e.target.value)} id='sub1' required/>
      </div>
        <div className='card2'>
          <label htmlFor="DDCO">Open Elective (Online Courses) Only through NPTEL</label><br />
          <input type="number" placeholder='Credits - 3x' maxLength={3} id='sub2' required/>
        </div>
        <div className='card'>
          <label htmlFor="OS">Internship (Industry/Research) (14 - 20 weeks</label><br />
          <input type="number" placeholder='Credits - 10x' maxLength={3}  id='sub3' required / >
        </div>
        {/* <div className='card2'>
          <label htmlFor="DSA">Data Structures and Applications</label><br />
          <input type="number" placeholder='DSA Credits - 3x' maxLength={3} id='sub4' required />
        </div>
        <div className='card'>
          <label htmlFor="Python">Python / JAVA / R</label><br />
          <input type="number" placeholder='Python Credits - 3x' maxLength={3} id='sub5' required />
        </div>
        <div className='card2'>
          <label htmlFor="DSA-L">Data Structures LAB</label><br />
          <input type="number" placeholder='DSA-L Credits - 1x' maxLength={3} id='sub6' required />
        </div>
        <div className='card'>
          <label htmlFor="Social">Social Connect & Responsibility</label><br />
          <input type="number" placeholder='Social Credits - 1x' maxLength={3}  id='sub7' required />
        </div>
        <div className='card2'>
          <label htmlFor="DDCo">Excel / Ethics / Git </label><br />
          <input type="number" placeholder='Excel Credits - 1x' maxLength={3} id='sub8' required />
        </div> */}
        <button onClick={()=>{
          Check()
        }}>Check!</button>
        
        <h1 id="ans"></h1>
    
    </div>
    </>
  )
}

export default Sem8