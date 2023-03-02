import useBreadcrumbs from 'use-react-router-breadcrumbs';
const PageHeader = (props) => {
    const breadcrumbs = useBreadcrumbs();
    return (
        <div className='page-header bg-light py-3'>
            <div className='container mt-5 pt-4 text-center'>
                <h1 className='h3'>{props.title}</h1>
                <p className='bread'>
                    {breadcrumbs.map(({ breadcrumb }) => {
                        return (
                            <>
                                {breadcrumb}
                                <span>
                                    <i className='bi bi-caret-right-fill px-1 small custom-color'></i>
                                </span>
                            </>
                        );
                    })}
                </p>
            </div>
        </div>
    );
};

export default PageHeader;
