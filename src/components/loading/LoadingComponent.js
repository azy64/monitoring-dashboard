
const LoadingComponent=()=>{
    return(
        <div style={style.container}>
            <div style={style.loader}>
                <img src="/images/load1.gif" style={style.loading} alt="loading" title="waiting for..."/>
            </div>
        </div>
    )
}
const style={
    container:{
        width:"100%",
        height:"100%",
        position:"absolute",
        left:"0px",
        top:"0px",
        background:"rgba(10,15,12,0.6)"
    },
    loader:{
        width:"100px",
        margin:"auto",
        marginTop:"18%",
        textAlign:"center"
    },
    loading:{
        width:"80px"
    }
}

export default LoadingComponent;