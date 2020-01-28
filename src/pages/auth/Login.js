import React from 'react';
import Layout from '../../layout/Layout';
import Card from '../../components/Card';

const Login = () => {
    return (
        <>
            <Layout>
                <div className="container mt-5">
                    <h1 className="text-center">Login</h1>
                    <Card className="col-md-5 m-auto">
                        <form action="">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <button className="btn btn-app-primary btn-block">Login</button>
                            <p className="pt-3">
                                <a className="txt-primary anchor" href="#">Forgot your password? Reset.</a>
                            </p>
                            <p className="">
                                <a className="txt-primary anchor" href="/register">Don't have an account? Register.</a>
                            </p>
                        </form>
                    </Card>
                </div>
            </Layout>
        </>
    );
}

export default Login;
