import React from 'react';
import avatarPic from '../../assets/AvatarMaker (1).png';
import airplane from '../../assets/airplane.png';
import barbell from '../../assets/barbell-clipart.jpg';
import soccer from '../../assets/soccer-ball.png'

const About = () => {

    return (
        <section>
            <div>
                <h3 className="section-title">About Xavy</h3>
                <img className="profile-img" src={avatarPic} alt="Xavy's avatar"></img>
                <p className="about-par">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in mi quis augue auctor varius nec non enim. Vestibulum bibendum, mauris ut mollis accumsan, diam eros vestibulum sapien, luctus consectetur mi lacus sed erat. Fusce sit amet purus finibus, placerat risus iaculis, hendrerit tellus. Praesent orci mauris, gravida eget vulputate ac, mollis pellentesque leo. Nunc cursus auctor urna, at porttitor metus. In ultricies sapien in elit viverra, sit amet semper eros dignissim. Nulla tellus mauris, suscipit vitae erat id, placerat euismod turpis. Donec massa lacus, eleifend eu est id, condimentum bibendum ex. Donec tempus rutrum facilisis.
                    Integer blandit felis id pulvinar aliquet. Duis in scelerisque nisl. Integer sagittis, quam eu fermentum pretium, turpis urna aliquam libero, id venenatis turpis sem nec libero. Sed sit amet tempor ipsum, at fermentum tellus. Sed metus mauris, condimentum eu condimentum facilisis, varius non metus. Ut id neque non mauris maximus porta vel a augue. Praesent pretium consectetur sem sit amet imperdiet. Sed ultricies cursus pulvinar. Ut molestie, velit vel interdum posuere, sapien neque sagittis nulla, nec blandit enim nisi quis leo. Aenean sit amet lacus id orci ullamcorper porta a non felis. Donec vitae lectus vel neque feugiat elementum viverra et ante. Aliquam erat volutpat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in mi quis augue auctor varius nec non enim.
                </p>
            </div>
            <div className="interest-images">
                <img src={airplane} alt="airplane image"></img>
                <img src={soccer} alt="soccer ball image"></img>
                <img src={barbell} alt="barbell image"></img>
                
            </div>
        </section>
    );
};

export default About;