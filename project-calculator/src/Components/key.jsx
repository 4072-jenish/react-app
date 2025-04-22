

const Key = () => {
    let key = [9 , 8 , 7 , 4 , 5 , 6 , 1 , 2 , 3 , 0 , "+" , "-" , "*" , "/" , "." , "C" , "="];

    return (
        <>
            <input type="text" />
            <div className="calculator">
                {
                    key.map((item) => {
                        return (
                            <button className="key" onClick={() => {
                                // console.log(item);
                            }}>{item}</button>
                        )
                    })
                }
            </div>
        </>
    );


} 
export default Key;

