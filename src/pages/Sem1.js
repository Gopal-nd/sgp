import React from 'react'
import { useState } from 'react';

const Sem1 = () => {
  const[mark, setMarks]=useState([]);
  const[markvalue, setMarkvalue]=useState();
  const[show,setShow] = useState();


  const Check = ()=>{
 
    let sum =0
    var value =[ document.getElementById("sub1").value, document.getElementById("sub2").value, document.getElementById("sub3").value, document.getElementById("sub4").value, document.getElementById("sub5").value, document.getElementById("sub6").value,document.getElementById("sub7").value,document.getElementById("sub8").value];
  

    let val = [4,4,3,3,3,1,1,1];
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
    var ans=sum/20;
    setShow(<h1 id = "ans">Your Sgpa {ans.toFixed(2) }</h1>);
 document.getElementById("ans").innerHTML="Your Sgpa = "+ans.toFixed(2);

  }
  return (
  <div>
    <h1>2022 Scheme <span className='sp'>1st Sem SGPA</span> Calculator</h1>
    <div className='main'>
     
      <div className='card'>
        <label htmlFor="Maths">Maths</label><br />
        <input type="numbre" placeholder='Maths Credits - 4x' maxLength={3} onChange={(e)=>setMarkvalue(e.target.value)} id='sub1' required/>
      </div>
        <div className='card2'>
          <label htmlFor="DDCO">Applied Physics for CSE stream</label><br />
          <input type="number" placeholder='Physics Credits - 4x' maxLength={3} id='sub2' required/>
        </div>
        <div className='card'>
          <label htmlFor="OS">Principles of Programming Using C</label><br />
          <input type="number" placeholder='C Program Credits - 3x' maxLength={3}  id='sub3' required / >
        </div>
        <div className='card2'>
          <label htmlFor="DSA">Introduction to Electronics</label><br />
          <input type="number" placeholder='Electronics Credits - 3x' maxLength={3} id='sub4' required />
        </div>
        <div className='card'>
          <label htmlFor="Python">Introduction to Cyber Security</label><br />
          <input type="number" placeholder='Cyber Security Credits - 3x' maxLength={3} id='sub5' required />
        </div>
        <div className='card2'>
          <label htmlFor="DSA-L">Communicative English</label><br />
          <input type="number" placeholder='English Credits - 1x' maxLength={3} id='sub6' required />
        </div>
        <div className='card'>
          <label htmlFor="Social">Samskrutika Kannada/ Balake
Kannada</label><br />
          <input type="number" placeholder='kannada Credits - 1x' maxLength={3}  id='sub7' required />
        </div>
        <div className='card2'>
          <label htmlFor="DDCo">Innovation and Design Thinking </label><br />
          <input type="number" placeholder='IDT Credits - 1x' maxLength={3} id='sub8' required />
        </div>
        <button onClick={()=>{
          Check()
        }}>Check!</button>
        
        <h1 id="ans"></h1>
    
    </div>
    </div>
  )

}

export default Sem1