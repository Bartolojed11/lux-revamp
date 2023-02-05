export default function Separator({ title }) {
    return (
        <div className='container-fluid'>
            <div className='title__wrapper container-fluid'>
                <div className='title d-flex'>
                    <div className='title__inner'>
                        <span className='title-content'>{title}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}