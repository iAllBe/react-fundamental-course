import cl from './Loader.module.css'

export default function Loader() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
            <div className={cl.loader}></div>
        </div>
    );
}