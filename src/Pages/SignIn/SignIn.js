import './SignIn.scss'
import {Link } from 'react-router-dom'

function SignIn(){

    return(

<section class="background">

    <div class="main_container">

        <div class="non_form">

            <div class="company_logo">
            <Link to={"/"}><a class="home__link"><h1 class="first">RAKU</h1><h1>TECH</h1></a></Link>
            </div>
            <div class="bar"></div>
            <p>Browse from over 500 devices in your area.</p>

        </div>

        <div class="form__side">
            <div class="form__container">
                <div class="form__container--inside">
                <div class="header_container">
                    <h1>Sign In</h1>
                </div>
                <input type="submit" class="sign__in--apple" value="SIGN IN WITH APPLE" />
                <input type="submit" class="sign__in--facebook" value="SIGN IN WITH FACEBOOK" />
                    <div class="divider">
                    <p> OR </p> 
                    </div>
                <div class="input__email">
                    <label for="email">Email</label>
                    <input type="text" name= "email" class="user__email" />
                </div>
                <div class="input__password">
                    <label for="password">Password</label>
                    <input type="password" name= "password" class="user__password" placeholder="Must have at least 6 characters" />
                </div>
                <input type="submit" class="sign__up" value="SIGN IN"/>
                <p class="terms_agreement">By continuing, you agree to accept our Privacy Polic & Terms of Service.</p>

                <p class="registration">Don't have an account? <Link to={"SignUp"}><a >Create new account</a></Link></p>
            </div>
            </div>
        </div>
    </div>

</section>

    )

}

export default SignIn;