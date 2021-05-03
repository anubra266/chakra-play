import VtrilProgress from "vtril-progress";
//? handle any app bootstrapping here

export default function App({ children }: any) {
    VtrilProgress.init({
        // The delay after which the progress bar will
        // appear during navigation, in milliseconds.
        delay: 250,

        // The color of the progress bar.
        color: "#29d",

        // Whether to include the default NProgress styles.
        includeCSS: true,

        // Whether the NProgress spinner will be shown.
        showSpinner: false,
    });

    return <>{children}</>;
}
