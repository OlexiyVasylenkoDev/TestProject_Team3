import banner from "../../img/banner.jpg";
import "./catalog-slider.css";
import ReactDOM from 'react-dom';
import React, { Component } from "react";
//import Stylesheet from "reactjs-stylesheet";
class Catalog_slider extends Component <{}, { left: number , next:number, prev:number, dot:number}>{
    constructor(props:any) {
    super(props);
        this.state = {left:0, next:0, prev:0, dot:3};
    }
    minusClick(){
        this.setState((prevState) => {
            return { left: prevState.left - 1032, dot: prevState.dot + 1}
        })
    }
    plusClick(){
        this.setState((prevState) => {
            return { left: prevState.left + 1032, dot: prevState.dot - 1}
        })
    }
    leftNextCheck(){
        this.setState((prevState) => {
            if (prevState.left <= -2064){
                return {next : 1}
            }
            else {
                return {next: 0}
            }
            
        })
    }
    leftPrevCheck(){
        this.setState((prevState) => {
            if (prevState.left >= 2064){
                return {prev : 1}
            }
            else {
                return {prev: 0}
            }
            
        })
    }
    onPlusClick() {
        this.plusClick();
        this.leftNextCheck();
        this.leftPrevCheck(); 
    }
    onMinusClick(){
        this.minusClick();
        this.leftNextCheck();
        this.leftPrevCheck(); 
    }
    onFirstDotClick(){
        this.setState((prevState) => {
            return {left : 2064}
        });
        this.leftPrevCheck();
        this.leftNextCheck();
    }
    onLastDotClick(){
        this.setState((prevState) => {
            return {left : -2064}
        });
        this.leftPrevCheck();
        this.leftNextCheck();
    }
    onSecondDotClick(){
        this.setState((prevState) => {
            return {left : 1032}
        });
        this.leftPrevCheck();
        this.leftNextCheck(); 
    }
    onThirdDotClick(){
        this.setState((prevState) => {
            return {left : 0}
        });
        this.leftPrevCheck();
        this.leftNextCheck();
    }
    onForthDotClick(){
        this.setState((prevState) => {
            return {left : -1032}
        });
        this.leftPrevCheck();
        this.leftNextCheck(); 
    }
    render(){
    return (
            <div className="catalog-slider">
                <div className="container">
                    <ul className="catalog-list">
                        <li className="catalog-item">
                            <a href="#" className="catalog-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-icon">
                                    <path d="M16 1H8C6.34 1 5 2.34 5 4V20C5 21.66 6.34 23 8 23H16C17.66 23 19 21.66 19 20V4C19 2.34 17.66 1 16 1ZM17 18H7V4H17V18ZM14 21H10V20H14V21Z" fill="black"/>
                                </svg>
                                Смартфони та телефони
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="right-icon">
                                    <path d="M8.29508 16.59L12.8751 12L8.29508 7.41L9.70508 6L15.7051 12L9.70508 18L8.29508 16.59Z" fill="black"/>
                                </svg>
                            </a>
                        </li>
                        <li className="catalog-item">
                            <a href="#" className="catalog-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-icon">
                                    <path d="M21 2H3C1.9 2 1 2.9 1 4V16C1 17.1 1.9 18 3 18H10V20H8V22H16V20H14V18H21C22.1 18 23 17.1 23 16V4C23 2.9 22.1 2 21 2ZM21 16H3V4H21V16Z" fill="black"/>
                                </svg>
                                Телевізори і аудіотехніка
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="right-icon">
                                    <path d="M8.29508 16.59L12.8751 12L8.29508 7.41L9.70508 6L15.7051 12L9.70508 18L8.29508 16.59Z" fill="black"/>
                                </svg>
                            </a>
                        </li>
                        <li className="catalog-item">
                            <a href="#" className="catalog-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-icon">
                                    <path d="M22 18.5V3.5H2V18.5H0V20.5H24V18.5H22ZM14 18.5H10V17.5H14V18.5ZM20 15.5H4V5.5H20V15.5Z" fill="black"/>
                                </svg>
                                Ноутбуки, ПК, Планшети
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="right-icon">
                                    <path d="M8.29508 16.59L12.8751 12L8.29508 7.41L9.70508 6L15.7051 12L9.70508 18L8.29508 16.59Z" fill="black"/>
                                </svg>
                            </a>
                        </li>
                        <li className="catalog-item">
                            <a href="#" className="catalog-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-icon">
                                    <path d="M15.49 9.63C15.31 6.84 14.18 4.12 12.06 2C9.92 4.14 8.74 6.86 8.51 9.63C9.79 10.31 10.97 11.19 12 12.26C13.03 11.2 14.21 10.32 15.49 9.63ZM12.05 5.19C12.68 6.22 13.12 7.37 13.35 8.57C12.88 8.87 12.44 9.2 12.01 9.55C11.59 9.21 11.14 8.88 10.68 8.58C10.93 7.38 11.39 6.23 12.05 5.19ZM12 15.45C11.18 14.2 10.14 13.11 8.94 12.25C8.81 12.16 8.67 12.09 8.54 11.99C8.67 12.08 8.81 12.16 8.93 12.24C6.98 10.83 4.59 10 2 10C2 15.32 5.36 19.82 10.03 21.49C10.66 21.72 11.32 21.89 12 22C12.68 21.88 13.33 21.71 13.97 21.49C18.64 19.82 22 15.32 22 10C17.82 10 14.15 12.17 12 15.45ZM13.32 19.6C12.88 19.75 12.44 19.87 11.99 19.97C11.55 19.88 11.12 19.76 10.71 19.61C7.42 18.43 5.01 15.62 4.26 12.26C5.36 12.52 6.41 12.97 7.38 13.59L7.36 13.6C7.49 13.69 7.62 13.78 7.75 13.85L7.82 13.89C8.81 14.61 9.66 15.5 10.33 16.54L12 19.1L13.67 16.55C14.36 15.5 15.22 14.6 16.2 13.89L16.27 13.84C16.36 13.79 16.45 13.73 16.54 13.67L16.53 13.65C17.51 13 18.6 12.52 19.74 12.25C18.99 15.62 16.59 18.43 13.32 19.6ZM8.99 12.28C8.97 12.27 8.95 12.25 8.94 12.24C8.94 12.24 8.95 12.24 8.95 12.25C8.96 12.26 8.97 12.27 8.99 12.28Z" fill="black"/>
                                </svg>
                                Краса та здоров’я
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="right-icon">
                                    <path d="M8.29508 16.59L12.8751 12L8.29508 7.41L9.70508 6L15.7051 12L9.70508 18L8.29508 16.59Z" fill="black"/>
                                </svg>
                            </a>
                        </li>
                        <li className="catalog-item">
                            <a href="#" className="catalog-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-icon">
                                    <path d="M20.7099 16.1L19.0699 14.46C18.9264 14.3268 18.828 14.1521 18.7886 13.9603C18.7491 13.7684 18.7706 13.5691 18.8499 13.39C19.1987 12.6411 19.3828 11.8261 19.3899 11C19.3946 10.9669 19.3946 10.9332 19.3899 10.9C19.3934 9.70344 19.0228 8.53567 18.3299 7.56004C16.991 5.68881 15.2166 4.17177 13.1599 3.14004C11.8554 2.50141 10.3844 2.28441 8.95101 2.51913C7.51759 2.75386 6.19269 3.42867 5.15994 4.45004L4.48994 5.12004C3.45782 6.15671 2.77642 7.49068 2.54145 8.93455C2.30649 10.3784 2.52977 11.8596 3.17994 13.17L3.27994 13.34C2.74628 13.8937 2.44558 14.6311 2.43994 15.4C2.44391 15.9307 2.58855 16.4507 2.8591 16.9072C3.12965 17.3637 3.51644 17.7402 3.98 17.9984C4.44357 18.2567 4.96733 18.3873 5.49786 18.377C6.02839 18.3668 6.5467 18.216 6.99994 17.94C7.17994 18.08 7.33994 18.23 7.51994 18.36C7.89845 18.6232 8.30827 18.8382 8.73994 19H8.82994C9.00994 19.07 9.19994 19.13 9.39994 19.19H9.54994C9.86115 19.27 10.1792 19.3202 10.4999 19.34H10.7799H10.8999H11.1199C11.3299 19.34 11.5299 19.34 11.7399 19.28H11.9099C12.4016 19.1956 12.8794 19.0442 13.3299 18.83C13.5095 18.7577 13.7062 18.7391 13.8961 18.7764C14.086 18.8136 14.261 18.9052 14.3999 19.04L15.8599 20.5C16.4934 21.1357 17.3525 21.4952 18.2499 21.5C19.0027 21.492 19.7217 21.1864 20.2499 20.65L20.6299 20.27C21.1815 19.7211 21.4982 18.9793 21.5131 18.2012C21.5281 17.4232 21.2401 16.6698 20.7099 16.1ZM5.40994 16.42C5.21216 16.42 5.01882 16.3614 4.85437 16.2515C4.68992 16.1416 4.56175 15.9855 4.48606 15.8027C4.41037 15.62 4.39057 15.4189 4.42916 15.225C4.46774 15.031 4.56298 14.8528 4.70283 14.7129C4.84269 14.5731 5.02087 14.4778 5.21485 14.4393C5.40883 14.4007 5.6099 14.4205 5.79262 14.4962C5.97535 14.5718 6.13153 14.7 6.24141 14.8645C6.35129 15.0289 6.40994 15.2223 6.40994 15.42C6.40994 15.6853 6.30458 15.9396 6.11705 16.1271C5.92951 16.3147 5.67516 16.42 5.40994 16.42ZM8.50994 16.56L8.24994 16.36C8.35407 16.0575 8.40811 15.74 8.40994 15.42C8.40994 14.6244 8.09387 13.8613 7.53126 13.2987C6.96865 12.7361 6.20559 12.42 5.40994 12.42C5.27994 12.42 5.15994 12.42 5.02994 12.42L4.93994 12.26C4.47482 11.3246 4.3144 10.2669 4.4812 9.23564C4.648 8.20433 5.13365 7.25118 5.86994 6.51004L6.53994 5.84004C7.2906 5.12059 8.24687 4.65305 9.27567 4.50249C10.3045 4.35194 11.3546 4.52585 12.2799 5.00004C13.9598 5.84026 15.4189 7.06305 16.5399 8.57004L8.50994 16.56ZM19.2899 18.93L18.9199 19.31C18.4999 19.73 17.8499 19.65 17.3099 19.11L15.8499 17.66C15.42 17.2329 14.8707 16.946 14.2745 16.8371C13.6783 16.7282 13.0631 16.8024 12.5099 17.05C12.1947 17.2045 11.8573 17.3091 11.5099 17.36C11.3188 17.3965 11.1245 17.4133 10.9299 17.41H10.5899H10.4899L17.3599 10.54C17.4299 11.2252 17.3124 11.9165 17.0199 12.54C16.7723 13.0932 16.6981 13.7084 16.807 14.3046C16.9159 14.9008 17.2028 15.4501 17.6299 15.88L19.2699 17.53C19.4559 17.7143 19.5621 17.9642 19.5658 18.226C19.5696 18.4877 19.4705 18.7405 19.2899 18.93Z" fill="black"/>
                                </svg>
                                Спорт і туризм
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="right-icon">
                                    <path d="M8.29508 16.59L12.8751 12L8.29508 7.41L9.70508 6L15.7051 12L9.70508 18L8.29508 16.59Z" fill="black"/>
                                </svg>
                            </a>
                        </li>
                        <li className="catalog-item">
                            <a href="#" className="catalog-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-icon">
                                    <path d="M3 19H19V21H3V19ZM19 3H3V13C3 15.21 4.79 17 7 17H13C15.21 17 17 15.21 17 13V10H19C20.11 10 21 9.1 21 8V5C21 3.89 20.11 3 19 3ZM15 13C15 14.1 14.1 15 13 15H7C5.9 15 5 14.1 5 13V5H15V13ZM19 8H17V5H19V8Z" fill="black"/>
                                </svg>
                                Посуд
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="right-icon">
                                    <path d="M8.29508 16.59L12.8751 12L8.29508 7.41L9.70508 6L15.7051 12L9.70508 18L8.29508 16.59Z" fill="black"/>
                                </svg>
                            </a>
                        </li>
                        <li className="catalog-item">
                            <a href="#" className="catalog-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-icon">
                                    <path d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4H6.5C5.84 4 5.29 4.42 5.08 5.01L3 11V19C3 19.55 3.45 20 4 20H5C5.55 20 6 19.55 6 19V18H18V19C18 19.55 18.45 20 19 20H20C20.55 20 21 19.55 21 19V11L18.92 5.01ZM6.85 6H17.14L18.18 9H5.81L6.85 6ZM19 16H5V11H19V16Z" fill="black"/>
                                    <path d="M7.5 15C8.32843 15 9 14.3284 9 13.5C9 12.6716 8.32843 12 7.5 12C6.67157 12 6 12.6716 6 13.5C6 14.3284 6.67157 15 7.5 15Z" fill="black"/>
                                    <path d="M16.5 15C17.3284 15 18 14.3284 18 13.5C18 12.6716 17.3284 12 16.5 12C15.6716 12 15 12.6716 15 13.5C15 14.3284 15.6716 15 16.5 15Z" fill="black"/>
                                </svg>
                                Автотовари
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="right-icon">
                                    <path d="M8.29508 16.59L12.8751 12L8.29508 7.41L9.70508 6L15.7051 12L9.70508 18L8.29508 16.59Z" fill="black"/>
                                </svg>
                            </a>
                        </li>
                        <li className="catalog-item">
                            <a href="#" className="catalog-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-icon">
                                    <path d="M22 9L12 2L2 9H11V22H13V9H22ZM12 4.44L15.66 7H8.34L12 4.44Z" fill="black"/>
                                    <path d="M4.14 12L2.18 12.37L3 16.74V22H5L5.02 18H7V22H9V16H4.9L4.14 12Z" fill="black"/>
                                    <path d="M19.1 16H15V22H17V18H18.98L19 22H21V16.74L21.82 12.37L19.86 12L19.1 16Z" fill="black"/>
                                </svg>
                                Товари для саду, городу
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="right-icon">
                                    <path d="M8.29508 16.59L12.8751 12L8.29508 7.41L9.70508 6L15.7051 12L9.70508 18L8.29508 16.59Z" fill="black"/>
                                </svg>
                            </a>
                        </li>
                        <li className="catalog-item">
                            <a href="#" className="catalog-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-icon">
                                    <path d="M10 10C10 9.80222 9.94136 9.60888 9.83147 9.44443C9.72159 9.27998 9.56541 9.15181 9.38269 9.07612C9.19996 9.00043 8.9989 8.98063 8.80491 9.01921C8.61093 9.0578 8.43275 9.15304 8.2929 9.29289C8.15305 9.43275 8.0578 9.61093 8.01922 9.80491C7.98063 9.99889 8.00044 10.2 8.07612 10.3827C8.15181 10.5654 8.27998 10.7216 8.44443 10.8315C8.60888 10.9414 8.80222 11 9 11C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89465 10.5196 10 10.2652 10 10ZM14.5 14.06C14.3865 13.9935 14.2609 13.95 14.1305 13.9321C14.0002 13.9142 13.8675 13.9222 13.7403 13.9556C13.613 13.9891 13.4936 14.0473 13.3889 14.127C13.2841 14.2067 13.1962 14.3062 13.13 14.42C13.0165 14.6196 12.8521 14.7856 12.6536 14.901C12.4551 15.0165 12.2296 15.0773 12 15.0773C11.7704 15.0773 11.5449 15.0165 11.3464 14.901C11.1479 14.7856 10.9835 14.6196 10.87 14.42C10.8038 14.3062 10.7159 14.2067 10.6112 14.127C10.5064 14.0473 10.387 13.9891 10.2597 13.9556C10.1325 13.9222 9.99984 13.9142 9.86947 13.9321C9.73909 13.95 9.61354 13.9935 9.5 14.06C9.27127 14.1919 9.104 14.4089 9.03468 14.6637C8.96537 14.9185 8.99963 15.1904 9.13 15.42C9.42005 15.9248 9.83811 16.3442 10.342 16.6358C10.8459 16.9274 11.4178 17.081 12 17.081C12.5822 17.081 13.1541 16.9274 13.658 16.6358C14.1619 16.3442 14.58 15.9248 14.87 15.42C15.0004 15.1904 15.0346 14.9185 14.9653 14.6637C14.896 14.4089 14.7287 14.1919 14.5 14.06ZM15 9C14.8022 9 14.6089 9.05865 14.4444 9.16853C14.28 9.27841 14.1518 9.43459 14.0761 9.61732C14.0004 9.80004 13.9806 10.0011 14.0192 10.1951C14.0578 10.3891 14.153 10.5673 14.2929 10.7071C14.4328 10.847 14.6109 10.9422 14.8049 10.9808C14.9989 11.0194 15.2 10.9996 15.3827 10.9239C15.5654 10.8482 15.7216 10.72 15.8315 10.5556C15.9414 10.3911 16 10.1978 16 10C16 9.73478 15.8946 9.48043 15.7071 9.29289C15.5196 9.10536 15.2652 9 15 9ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.1373 20.008 8.33021 19.3658 6.89032 18.1842C5.45043 17.0025 4.46802 15.3554 4.11252 13.5269C3.75702 11.6984 4.05071 9.80322 4.94293 8.16811C5.83516 6.53299 7.27 5.26047 9 4.57C8.98972 4.71315 8.98972 4.85685 9 5C9 5.79565 9.31607 6.55871 9.87868 7.12132C10.4413 7.68393 11.2044 8 12 8C12.2652 8 12.5196 7.89464 12.7071 7.70711C12.8946 7.51957 13 7.26522 13 7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 5.89464 11.2929 5.70711C11.1054 5.51957 11 5.26522 11 5C11 4.73478 11.1054 4.48043 11.2929 4.29289C11.4804 4.10536 11.7348 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1572 7.84344 20 9.87827 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z" fill="black"/>
                                </svg>
                                Товари для дітей
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="right-icon">
                                    <path d="M8.29508 16.59L12.8751 12L8.29508 7.41L9.70508 6L15.7051 12L9.70508 18L8.29508 16.59Z" fill="black"/>
                                </svg>
                            </a>
                        </li>
                        <li className="catalog-item">
                            <a href="#" className="catalog-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-icon">
                                    <path d="M17 14C16.76 13.76 16.56 13.51 16.35 13.25C17.51 11.5 19 8.56 19 5C19 3.05 18.26 2 17 2C15.46 2 13.04 4.06 12 7.97C10.96 4.06 8.54 2 7 2C5.74 2 5 3.05 5 5C5 8.56 6.49 11.5 7.65 13.25C7.44 13.51 7.24 13.76 7 14C6.75 14.25 5 15.39 5 17.5C5 19.98 7.02 22 9.5 22C11 22 12 21.5 12 21.5C12 21.5 13 22 14.5 22C16.98 22 19 19.98 19 17.5C19 15.39 17.25 14.25 17 14ZM16.88 4.03C16.94 4.2 17 4.51 17 5C17 7.84 15.89 10.24 14.93 11.78C14.55 11.52 14.1 11.3 13.53 11.16C13.77 6.64 15.97 4.33 16.88 4.03ZM7 5C7 4.51 7.06 4.2 7.12 4.03C8.03 4.33 10.23 6.64 10.48 11.16C9.9 11.3 9.45 11.51 9.08 11.78C8.11 10.24 7 7.84 7 5ZM14.5 20C13.5 20 12.7 19.67 12.28 19.44C12.7 19.26 13 18.73 13 18.5C13 18.22 12.55 18 12 18C11.45 18 11 18.22 11 18.5C11 18.73 11.3 19.26 11.72 19.44C11.3 19.67 10.5 20 9.5 20C8.12 20 7 18.88 7 17.5C7 16.8 7.43 16.26 8 15.77C8.44 15.41 8.61 15.25 9.3 14.4C10.06 13.45 10.39 13 12 13C13.61 13 13.94 13.45 14.7 14.4C15.39 15.25 15.56 15.41 16 15.77C16.57 16.26 17 16.8 17 17.5C17 18.88 15.88 20 14.5 20ZM14 16C14 16.41 13.78 16.75 13.5 16.75C13.22 16.75 13 16.41 13 16C13 15.59 13.22 15.25 13.5 15.25C13.78 15.25 14 15.59 14 16ZM11 16C11 16.41 10.78 16.75 10.5 16.75C10.22 16.75 10 16.41 10 16C10 15.59 10.22 15.25 10.5 15.25C10.78 15.25 11 15.59 11 16Z" fill="black"/>
                                </svg>
                                Зоотовари
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="right-icon">
                                    <path d="M8.29508 16.59L12.8751 12L8.29508 7.41L9.70508 6L15.7051 12L9.70508 18L8.29508 16.59Z" fill="black"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div className="slider">
                        <div className="for-subscription">
                            <div className="slider-img">
                                <button className="slider-prev-link"  onClick={this.onPlusClick.bind(this)} disabled={this.state.prev === 1}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="slider-prev">
                                        <path d="M15.7049 16.59L11.1249 12L15.7049 7.41L14.2949 6L8.29492 12L14.2949 18L15.7049 16.59Z" fill="black"/>
                                    </svg>
                                </button>
                                <div className="inner" >
                                    <img src={banner} alt="" className="image-from-slider child" style={{left: this.state.left - 2064}}/>
                                    <img src={banner} alt="" className="image-from-slider child" style={{left: this.state.left - 1032}}/>
                                    <img src={banner} alt="" className="image-from-slider child" style={{left: this.state.left}}/>
                                    <img src={banner} alt="" className="image-from-slider child" style={{left: this.state.left + 1032}}/>
                                    <img src={banner} alt="" className="image-from-slider child" style={{left: this.state.left + 2064}}/>
                                </div>
                               
                                <button className="slider-next-link"  onClick={this.onMinusClick.bind(this)} disabled={this.state.next === 1}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="slider-next">
                                        <path d="M8.29508 16.59L12.8751 12L8.29508 7.41L9.70508 6L15.7051 12L9.70508 18L8.29508 16.59Z" fill="black"/>
                                    </svg>
                                </button>
                            </div>
                            <a href="#" className="all-offers">Переглянути усі акції</a>
                        </div>
                        <div className="dots">
                            <a href="#" className="dot dot1" onClick={this.onFirstDotClick.bind(this)}></a>
                            <a href="#" className="dot dot2" onClick={this.onSecondDotClick.bind(this)}></a>
                            <a href="#" className="dot dot3 active-dot" onClick={this.onThirdDotClick.bind(this)}></a>
                            <a href="#" className="dot dot4" onClick={this.onForthDotClick.bind(this)}></a>
                            <a href="#" className="dot dot5 last-dot" onClick={this.onLastDotClick.bind(this)}></a>
                        </div>
                    </div>
                </div>
            </div>
    );
};}

export default Catalog_slider;