const SectionHeader = (props) => {
    return (
        <div className='section-header'>
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
        </div>
    );
};

export default SectionHeader;
