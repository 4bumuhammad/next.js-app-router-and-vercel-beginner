'use client';

const ViewUserButton = () => {
    const handleClick = () => {
        console.log(`${new Date().toISOString()} -- lihat user`)
        alert('AKU DI KLIK')
    };

    return(
        <>
            <button onClick={handleClick}>Lihat User</button>
        </>
    );
};

export default ViewUserButton
