import React, { useState } from 'react';
import PortfolioTitle from '../portfolio-title/PortfolioTitle';
import PortfolioItems from '../portfolio-items/PortfolioItems';
import { LeftButton, RightButton } from '../switch-buttons/SwitchButtons.index';
import PortfolioStyles from './Portfolio.styles';
import Grid from '@material-ui/core/Grid';

const Portfolio = ({ portfolio }) => {
    const titles = portfolio.map(item => (
        item.name
    ));
    const [clickNumber, setClickNumber] = useState(1);
    const [title, setTitle] = useState("PROJECTS");

    const components = [
        // <LeftButton onButtonClick={onButtonClick} />,
        <PortfolioItems portfolio={portfolio} title={title} />,
        // <RightButton onButtonClick={onButtonClick} />
    ];

    function onButtonClick(e) {
        e.preventDefault();
        setClickNumber(calculateTitlesIndex(clickNumber, e));
        setTitle(titles[clickNumber]);
    }

    function calculateTitlesIndex(clickNumber, e) {
        e.target.dataset.icon === "chevron-circle-left" ? clickNumber-- : clickNumber++;
        return Math.abs(clickNumber % titles.length);
    }

    function gridRatio(component) {
        // return (
        //     component.type.name === "PortfolioItems" ? 8 : 2
        // );
        return 12;
    }

    return (
        <PortfolioStyles>
            <div id="portfolio" className="portfolio">
                <PortfolioTitle title={title} />
                < Grid container>
                    {
                        components.map((component, index) => (
                            <Grid className={component.type.name} item key={index} xs={gridRatio(component)}>
                                {component}
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </PortfolioStyles>
    );
}

export default Portfolio;