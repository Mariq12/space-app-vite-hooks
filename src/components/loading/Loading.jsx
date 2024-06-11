import { GooeyCircleLoader } from 'react-loaders-kit';
import "../../styles/root.css"

const getCssVariable = (variable) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variable);
};

const Loading = () => {
    const headerBgColor = getCssVariable("--st-color");
    const stSecondaryColor = getCssVariable("--nd-color");
    const ndSecondaryColor = getCssVariable("--rd-color");

    const loaderProps = {
        loading: true,
        size: 80,
        duration: 2,
        colors: [headerBgColor, stSecondaryColor, ndSecondaryColor],
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <GooeyCircleLoader style={{width: '30vw'}} {...loaderProps} />
        </div>
    );
}

export default Loading;
