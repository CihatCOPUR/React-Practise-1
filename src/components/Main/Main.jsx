import "./Main.css"

const Main= (props)=>{
   const {language,img,btn}=props;
    return(
        <center className="Main">
            
            <img src={img} alt="" />
            <div> <button >{btn}</button></div>
           
        </center>
    )
}

export default Main