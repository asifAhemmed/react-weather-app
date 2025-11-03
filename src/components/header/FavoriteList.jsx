import HeartIcon from "../../assets/heart.svg";

const FavoriteList = ({ onShowModal }) => {
    return (
        <div onClick={onShowModal} className="p-2 text-white hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
            <img src={HeartIcon} alt="" />
            <span>Favorite Locations</span>
        </div>
    );
};

export default FavoriteList;