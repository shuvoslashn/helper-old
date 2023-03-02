import { Rating } from 'react-simple-star-rating';

const SingleService = (props) => {
    return (
        <div className={'single-service ' + props.myClass}>
            <img
                src={props.img}
                alt={props.title}
                className='p-2'
                id='service-thumbnail'
            />
            <div className='service-info p-4'>
                <h5>{props.title}</h5>
                <p className='small'>{props.category}</p>
                <div className='d-flex gap-2 nomar'>
                    <Rating initialValue={props.rating} size={20} />
                    <p>({props.rating})</p>
                </div>
                <div className='d-flex gap-2 justify-content-between align-items-center px-3 bg-light rounded-5'>
                    <h6 className='pt-1'>Price: {props.price} Taka</h6>
                    <i className='bi bi-arrow-right' />
                </div>
            </div>
        </div>
    );
};

export default SingleService;
