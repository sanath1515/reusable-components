import React from 'react';

interface AddressProps {
    city:string;
}

interface DetailsProps {
    id:string;
    name:string;
    address:AddressProps;
    username:string;
}

interface UserProps{
    details: DetailsProps;
}

const User : React.FC<UserProps> = ({details}) => {

    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginBottom: '10px' }}>
            <div>{details.id}</div>
            <div>{details.name}</div>
            <div>{details.name}</div>
            <div>{details.address.city}</div>
            <div>{details.username}</div>
        </div>
    );
};

export default User;
