import React, { Component } from 'react';
import Title from './Title';

export default class Services extends Component {
    state = {
        services:[
            {
                icon: '',
                title: 'free cocktails ',
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                icon: '',
                title: 'endless hiking',
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                icon: '',
                title: 'free shuttle',
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                icon: '',
                title: 'games',
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }

        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>

                        )
                    })}
                </div>
            </section>
            
        )
    }
}