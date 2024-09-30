import React from "react"

export default function FromSearch(){
    const textKw = React.useRef()
    const btOk = React.createRef()

    const onChangeKw = () => {
        if (textKw.current.value.trim() !==''){
        btOk.current.disable = false
        }else{
        btOk.current.disable = true
        }
    }
    return(
        <div style={{margin:'30px'}}>
            <form>
                <input type="text" name="kw" placeholder="ค้นหา" ref = {textKw} onInput={onChangeKw}/>&nbsp;
                <button ref={btOk} disabled>ตกลง</button>
            </form>
        </div>
    )
}