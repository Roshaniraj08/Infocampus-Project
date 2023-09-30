
const Mycustomer = () =>{
    let allcustomer=[
        {city:"Banglore", account:['Satish', 'Rajesh']},
        {city:"Chennai", account:['Sumit', 'Ajit', 'Alex']},
        {city:"Pune", account:['Santosh', 'Sunil', 'Somya', 'Deepak']},
        {city:"Mumbai", account:['Subhash', 'Prakash', 'Pravin', 'Raj', 'Mohit']},
    ];
    return(
        <div className="container">
            <h1> Nested Map() on Nested Array of object </h1>
            {
                allcustomer.map((customer, index)=>{
                    return(
                        <fieldset key={index}>
                            <legend> {customer.city} - {customer.account.length} </legend>
                            {
                                customer.account.map((fullname, index2)=>{
                                    return(
                                        <p key={index2}> {fullname} </p>
                                    )
                                })
                            }
                        </fieldset>
                    )
                })
            }
        </div>
    )
}

export default Mycustomer;