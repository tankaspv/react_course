import React from 'react';

export default class DisplayElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
    }

    render() {
        let newsBlock;
        if (this.state.display) {
            newsBlock = (
                <div>
                    <h3>Новости</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, nemo laudantium non voluptatum, beatae adipisci voluptas 
                        est harum ipsam minus fugiat animi quos dolore necessitatibus suscipit aut amet dignissimos dicta sed, ex illum nulla. 
                        Ad saepe tempora dolorum consequuntur a, ut quo, harum repellat, eius culpa quia? Amet, eaque veniam!
                    </p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, nemo laudantium non voluptatum, beatae adipisci voluptas 
                        est harum ipsam minus fugiat animi quos dolore necessitatibus suscipit aut amet dignissimos dicta sed, ex illum nulla. 
                        Ad saepe tempora dolorum consequuntur a, ut quo, harum repellat, eius culpa quia? Amet, eaque veniam!
                    </p>
                </div>
            );
        }

        return (
            <React.Fragment>
                <h2 className="link" onClick={() => {
                    this.setState({display: !this.state.display})
                }}>Скрыть/показать блок</h2>
                {newsBlock}
            </React.Fragment>
        );
    }
}