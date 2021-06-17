import {Link } from 'react-router-dom'

function SignUp(){

    return(

        <section class="background">

            <div class="main_container">

                <div class="non_form">

                    <div class="company_logo">
                        <Link to="/"><a class="home__link"><h1 class="first">RAKU</h1><h1>TECH</h1></a></Link>
                    </div>
                    <div class="bar"></div>
                    <p>Browse from over 500 devices in your area.</p>

                </div>

                <div class="form__side">
                    <div class="form__container">
                        <div class="form__container--inside">
                        <div class="header__container">
                            <h1>Sign Up</h1>
                            <div class="log_in">
                                <p>Already have an account? </p>
                                <Link to="/SignIn"><a > Log In</a></Link>
                            </div>
                        </div>
                        <div class="input__name">
                            <label for="name">Full Name</label>
                            <input type="text" name= "name" class="user__name"/>
                        </div>
                        <div class="input__email">
                            <label for="email">Email</label>
                            <input type="text" name= "email" class="user__email"/>
                        </div>
                        <div class="input__password">
                            <label for="password">Password</label>
                            <input type="password" name= "password" class="user__password" placeholder="Must have at least 6 characters"/>
                        </div>
                        <div class="mailer">
                            <input type="checkbox" class="user__mailer"/> 
                            <p>Sign up for email updates.</p>
                        </div>
                        <input type="submit" class="sign__up" value="SIGN UP"/>
                        <input type="submit" class="sign__up" value="TEST" onclick="loadDoc()"/>
                        <p class="terms_agreement">By continuing, you agree to accept our Privacy Polic & Terms of Service.</p>
                        
                        <div id="demo"></div>

                    </div>
                </div>
            </div>
            </div>

</section>

    )

}

export default SignUp;