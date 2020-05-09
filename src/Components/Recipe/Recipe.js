import React from 'react';
import './Recipe.scss';

class Recipe extends React.Component {
    render() {
        return (
            <div className="container recipe">
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="title">
                            <h1>Sunny Side Up Egg</h1>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 order-sm-2 food-image">
                        <img src="https://images.unsplash.com/photo-1571388194924-477d24db88b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" alt="Egg" />
                    </div>
                    <div className="col-12 col-sm-8 order-sm-1">
                        <div className="ingredients">
                            <h4 className="mt-5">Ingredients</h4>
                            <hr class="my-2"></hr>
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <p>Egg<small>, the best quality you can find, preferably organic free range</small></p>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <p>Oil <small>, any oil you'd prefer</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="instructions">
                            <h4 className="mt-3">Instructions</h4>
                            <hr class="my-2"></hr>
                            <p>1) Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum officiis in reiciendis eius similique dolores quas eaque minima, officia ad!</p>
                            <p>2) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi voluptates molestiae reiciendis harum sed?</p>
                            <p>3) Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fuga sint sunt ex blanditiis provident exercitationem consequatur quis!</p>
                            <p>4) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint sit ipsa fugit nam corporis consequatur officiis dignissimos nihil vero!</p>
                        </div>
                        <div className="equipments">
                            <h4 className="mt-3">Equipments</h4>
                            <hr class="my-2"></hr>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Recipe;
