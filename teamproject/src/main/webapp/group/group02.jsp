<%@ page language="java" contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="ko">
<head>

<meta charset="utf-8">
<title>프로젝트-스케쥴</title>
<!--[if lt IE 9]>
      <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
<link rel="stylesheet" type="text/css" href="../css/common_style.css">
<link rel="stylesheet" type="text/css" href="../css/group02.css">
<script src="https://code.jquery.com/jquery-3.1.0.js"></script>
<meta name="viewport"
       content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
<jsp:include page="/header.jsp"></jsp:include>
</head>

<section>
  <div class="section-wrap">
    <h2>OOO 님의 그룹 입니다.</h2>
    <br> <br> <br> 
    <div>
	    <input type="text" name="tex1" placeholder="검색어를 입력하세요"> 
	    <input type="submit" value="검색">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	    <input type="submit" value="그룹" onClick="location.href='group01.jsp'">
	    <input type="submit" value="월간달력" onClick="location.href='group02.jsp'">
	    <input type="submit" value="주간달력" onClick="location.href='group03.jsp'">
    </div> 
    <br> <br> <br> <br>  

    <div id="calendar-wrap">
            <header>
                <h1>September 2016</h1>
            </header>
            <div id="calendar">
                <ul class="weekdays">
                    <li>Sunday</li>
                    <li>Monday</li>
                    <li>Tuesday</li>
                    <li>Wednesday</li>
                    <li>Thursday</li>
                    <li>Friday</li>
                    <li>Saturday</li>
                </ul>

                <!-- Days from previous month -->

                <ul class="days">
                    <li class="day other-month">
                        <div class="date">27</div>                      
                    </li>
                    <li class="day other-month">
                        <div class="date">28</div>
                        <div class="event">
                            <div class="event-desc">
                                HTML 5 lecture with Brad Traversy from Eduonix
                            </div>
                            <div class="event-time">
                                1:00pm to 3:00pm
                            </div>
                        </div>                      
                    </li>
                    <li class="day other-month">
                        <div class="date">29</div>                      
                    </li>
                    <li class="day other-month">
                        <div class="date">30</div>                      
                    </li>
                    <li class="day other-month">
                        <div class="date">31</div>                      
                    </li>

                    <!-- Days in current month -->

                    <li class="day">
                        <div class="date">1</div>                       
                    </li>
                    <li class="day">
                        <div class="date">2</div>
                        <div class="event">
                            <div class="event-desc">
                                Career development @ Community College room #402
                            </div>
                            <div class="event-time">
                                2:00pm to 5:00pm
                            </div>
                        </div>                      
                    </li>
                </ul>

                    <!-- Row #2 -->

                <ul class="days">
                    <li class="day">
                        <div class="date">3</div>                       
                    </li>
                    <li class="day">
                        <div class="date">4</div>                       
                    </li>
                    <li class="day">
                        <div class="date">5</div>                       
                    </li>
                    <li class="day">
                        <div class="date">6</div>                       
                    </li>
                    <li class="day">
                        <div class="date">7</div>
                        <div class="event">
                            <div class="event-desc">
                                Group Project meetup
                            </div>
                            <div class="event-time">
                                6:00pm to 8:30pm
                            </div>
                        </div>                      
                    </li>
                    <li class="day">
                        <div class="date">8</div>                       
                    </li>
                    <li class="day">
                        <div class="date">9</div>                       
                    </li>
                </ul>

                    <!-- Row #3 -->

                <ul class="days">
                    <li class="day">
                        <div class="date">10</div>                      
                    </li>
                    <li class="day">
                        <div class="date">11</div>                      
                    </li>
                    <li class="day">
                        <div class="date">12</div>                      
                    </li>
                    <li class="day">
                        <div class="date">13</div>                      
                    </li>
                    <li class="day">
                        <div class="date">14</div><div class="event">
                            <div class="event-desc">
                                Board Meeting
                            </div>
                            <div class="event-time">
                                1:00pm to 3:00pm
                            </div>
                        </div>                      
                    </li>
                    <li class="day">
                        <div class="date">15</div>                      
                    </li>
                    <li class="day">
                        <div class="date">16</div>                      
                    </li>
                </ul>

                    <!-- Row #4 -->

                <ul class="days">
                    <li class="day">
                        <div class="date">17</div>                      
                    </li>
                    <li class="day">
                        <div class="date">18</div>                      
                    </li>
                    <li class="day">
                        <div class="date">19</div>                      
                    </li>
                    <li class="day">
                        <div class="date">20</div>                      
                    </li>
                    <li class="day">
                        <div class="date">21</div>                      
                    </li>
                    <li class="day">
                        <div class="date">22</div>
                        <div class="event">
                            <div class="event-desc">
                                Conference call
                            </div>
                            <div class="event-time">
                                9:00am to 12:00pm
                            </div>
                        </div>                      
                    </li>
                    <li class="day">
                        <div class="date">23</div>                      
                    </li>
                </ul>

                        <!-- Row #5 -->

                <ul class="days">
                    <li class="day">
                        <div class="date">24</div>                      
                    </li>
                    <li class="day">
                        <div class="date">25</div>
                        <div class="event">
                            <div class="event-desc">
                                Conference Call
                            </div>
                            <div class="event-time">
                                1:00pm to 3:00pm
                            </div>
                        </div>                      
                    </li>
                    <li class="day">
                        <div class="date">26</div>                      
                    </li>
                    <li class="day">
                        <div class="date">27</div>                      
                    </li>
                    <li class="day">
                        <div class="date">28</div>                      
                    </li>
                    <li class="day">
                        <div class="date">29</div>                      
                    </li>
                    <li class="day">
                        <div class="date">30</div>                      
                    </li>
                </ul>

                <!-- Row #6 -->

                <ul class="days">
                    <li class="day">
                        <div class="date">31</div>                      
                    </li>
                    <li class="day other-month">
                        <div class="date">1</div> <!-- Next Month -->                       
                    </li>
                    <li class="day other-month">
                        <div class="date">2</div>                       
                    </li>
                    <li class="day other-month">
                        <div class="date">3</div>                       
                    </li>
                    <li class="day other-month">
                        <div class="date">4</div>                       
                    </li>
                    <li class="day other-month">
                        <div class="date">5</div>                       
                    </li>
                    <li class="day other-month">
                        <div class="date">6</div>                       
                    </li>
                </ul>

            </div><!-- /. calendar -->
        </div><!-- /. wrap -->
<!-- 월간달력 End -->





</section>
<jsp:include page="/footer.jsp"></jsp:include>
<script src="../js/main.js"></script>
</body>
</html>

