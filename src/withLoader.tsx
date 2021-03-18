import * as React from "react";

interface IProps {
    loading: boolean;
}

const withLoader = <P extends object>(Component: React.ComponentType<P>) =>
    class WithLoader extends React.Component<P & IProps> {
        public render() {
            const { loading, ...props } = this.props as IProps;
            return loading ? (
                <div className="loader-overlay">
                    <div className="loader-6 center"><span></span></div>
                </div>
            ) : (
                <Component {...props as P} />
            );
        }
    };
export default withLoader;
