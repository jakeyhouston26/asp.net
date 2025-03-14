import { useEffect, useState } from "react";

interface Team {
    teamName: string;
}

interface Bowler {
    bowlerID: number;
    firstName: string;
    middleInit?: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phoneNumber: string;
    team: Team;
}

function BowlerTable(): JSX.Element {
    const [bowlers, setBowlers] = useState<Bowler[]>([]);

    useEffect(() => {
        fetch("http://localhost:5143/api/Bowlers")
            .then(response => response.json())
            .then(data => setBowlers(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {bowlers.map((bowler) => (
                    <tr key={bowler.bowlerID}>
                        <td>{bowler.firstName} {bowler.middleInit || ""} {bowler.lastName}</td>
                        <td>{bowler.team?.teamName}</td>
                        <td>{bowler.address}</td>
                        <td>{bowler.city}</td>
                        <td>{bowler.state}</td>
                        <td>{bowler.zip}</td>
                        <td>{bowler.phoneNumber}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default BowlerTable;

