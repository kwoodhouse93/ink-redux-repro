declare module 'ink-redux' {
    export class Provider extends React.Component<any, any> {
        // render({ children }: {
        // children: any
        // }): any
        getChildContext(): {
            store: any
        }
    }
    export function connect(mapStateToProps: any, mapDispatchToProps: any, mergeProps?: (stateProps: any, dispatchProps: any, ownProps: any) => any): (WrappedComponent: any) => {
        new(): {
            render(ownProps: any, state: any, context: any): any
            componentDidMount(): void
            unsubscribe: any
            componentWillUnmount(): void
        }
    }
}
