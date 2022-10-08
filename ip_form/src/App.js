import {useState} from "react";

function App() {
    const [member, setMember] = useState({
        name: "", surname: "", adres: "", telefon: "",
        email: "", employer: "", employerOther: "",
        workplace: "", workplaceOther: "", contact: "",
        condition: "", department: "", login: "",
        belong: ""
    })

    const [dataObject, setDataObject] = useState({})


    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setMember({
            ...member,
            [e.target.name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setDataObject({...member})
    }

    console.log(dataObject)

    return (
        <form onSubmit={handleSubmit}
              style={{display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
        }}
        >
            <label>imię
                <input type='text' name="name"
                       value={member.name}
                       onChange={handleChange}/>
            </label>


            <label>nazwisko
                <input type='text' name="surname"
                       value={member.surname}
                       onChange={handleChange}/>
            </label>

            <label>adres
                <input type='text' name="adres"
                       value={member.adres}
                       onChange={handleChange}/>
            </label>

            <label>telefon
                <input type='text' name="telefon"
                       value={member.telefon}
                       onChange={handleChange}/>
            </label>

            <label>email
                <input type='text' name="email"
                       value={member.email}
                       onChange={handleChange}/>
            </label>

            <h2>pracodawca</h2>

            <label>amazon
                <input type='radio' name='employer'
                       value='amazon'
                       checked={member.employer === 'amazon'}
                       onChange={handleChange}
                />
            </label>

            <label>adecco
                <input type='radio' name='employer'
                       value='adecco'
                       checked={member.employer === 'adecco'}
                       onChange={handleChange}
                />
            </label>

            <label>randstad
                <input type='radio' name='employer'
                       value='randstad'
                       checked={member.employer === 'randstad'}
                       onChange={handleChange}
                />
            </label>

            <label>inne
                <input type='text' name="employerOther"
                       value={member.employerOther}
                       onChange={handleChange}/>
            </label>

            <h2>miejsce pracy</h2>

            <label>poz1
                <input type='radio' name='workplace'
                       value='poz1'
                       checked={member.workplace === 'poz1'}
                       onChange={handleChange}
                />
            </label>

            <label>wro1
                <input type='radio' name='workplace'
                       value='wro1'
                       checked={member.workplace === 'wro1'}
                       onChange={handleChange}
                />
            </label>

            <label>wro2
                <input type='radio' name='workplace'
                       value='wro2'
                       checked={member.workplace === 'wro2'}
                       onChange={handleChange}
                />
            </label>

            <label>wro5
                <input type='radio' name='workplace'
                       value='wro5'
                       checked={member.workplace === 'wro5'}
                       onChange={handleChange}
                />
            </label>

            <label>lcj
                <input type='radio' name='workplace'
                       value='lcj'
                       checked={member.workplace === 'lcj'}
                       onChange={handleChange}
                />
            </label>

            <label>ktw1
                <input type='radio' name='workplace'
                       value='ktw1'
                       checked={member.workplace === 'ktw1'}
                       onChange={handleChange}
                />
            </label>

            <label>ktw3
                <input type='radio' name='workplace'
                       value='ktw3'
                       checked={member.workplace === 'ktw3'}
                       onChange={handleChange}
                />
            </label>

            <label>szz1
                <input type='radio' name='workplace'
                       value='szz1'
                       checked={member.workplace === 'szz1'}
                       onChange={handleChange}
                />
            </label>

            <label>inne
                <input type='text' name="workplaceOther"
                       value={member.workplaceOther}
                       onChange={handleChange}/>
            </label>

            <h2>umowa</h2>

            <label>umowa na czas nieokreślony
                <input type='radio' name="contact"
                       value='czas nieokreślony'
                       checked={member.contact === 'czas nieokreślony'}
                       onChange={handleChange}/>
            </label>

            <label>umowa na czas określony
                <input type='radio' name="contact"
                       value='czas określony'
                       checked={member.contact === 'czas określony'}
                       onChange={(e) => handleChange(e)}/>
            </label>


            <label>okres próbny
                <input type='radio' name="contact"
                       value='okres próbny'
                       checked={member.contact === 'okres próbny'}
                       onChange={handleChange}/>
            </label>

            <label>umowa zlecenie
                <input type='radio' name="contact"
                       value='umowa zlecenie'
                       checked={member.contact === 'umowa zlecenie'}
                       onChange={handleChange}/>
            </label>

            <h2>wymiar czasu pracy</h2>

            <label>cały etat
                <input type='radio' name='condition'
                       value='cały etat'
                       checked={member.condition === 'cały etat'}
                       onChange={handleChange}
                />
            </label>

            <label>pół etatu
                <input type='radio' name='condition'
                       value='pół etatu'
                       checked={member.condition === 'pół etatu'}
                       onChange={handleChange}
                />
            </label>

            <h2>dział, login</h2>
            <label>dział
                <input type='text' name='department'
                       value={member.department}
                       onChange={handleChange}
                />
            </label>

            <label>login
                <input type='text' name='login'
                       value={member.login}
                       onChange={handleChange}
                />
            </label>

            <h2>przynależność do innych związków</h2>

            <label>nie należę
                <input type='radio' name="belong"
                       value='nie należę'
                       checked={member.belong === 'nie należę'}
                       onChange={handleChange}
                />
            </label>

            <label>należę
                <input type='radio' name="belong"
                       value='należę'
                       checked={member.belong === 'należę'}
                       onChange={handleChange}
                />
            </label>

            <label>należę nie chcę
                <input type='radio' name="belong"
                       value='należę nie chcę'
                       checked={member.belong === 'należę nie chcę'}
                       onChange={handleChange}
                />
            </label>

            <button style={{marginTop: 10}}> zatwierdż</button>
        </form>
    );
}

export default App;
