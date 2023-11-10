export default function CustomImage({imgSrc}) {
    return (
        <div className="custom-image">
            <img src={imgSrc} alt="" style={{height:"120px",width:"300px"}} />
        </div>
    )
}
