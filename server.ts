const username = "Not all those who wander";
const password = "are lost";

type TempleAccess = {
    username: string;
    password: string;
}

async function accessTemple (payload: TempleAccess) {
    const url = `${process.env.API_URL}/v1/s1/e4/solution`;
    try {
        const resp = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
                "API-KEY": process.env.API_KEY                
            },
        });

        if (!resp.ok) {
            throw new Error(`Error ${resp.statusText}`);
        }
        console.log("The gates were open and responded with: ",resp.statusText);
    }
    catch(error) {
        console.log(error.message)
    }
}

console.log("Accessing the Template with the Secrets...");

accessTemple({username, password});