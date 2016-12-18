package example.controller.json;

import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import example.vo.Member;

@Controller // 페이지 컨트롤러에 붙이는 애노테이션 
@RequestMapping("/sendmail/")
public class MailController {
	@Autowired 
	private JavaMailSender mailSender;
	
	private String from 	= "hahm0418@gmail.com";
	private String subject	= "메일제목 (생략가능)";
	
	@RequestMapping(path="mail")
	public String sendMail(HttpSession session) {
		System.out.println("111");	
		Member member = (Member)session.getAttribute("member");
	/*	String senderNmae = member.getName();*/
		try {
			MimeMessage message = mailSender.createMimeMessage();
			MimeMessageHelper messageHelper = new MimeMessageHelper(message, true, "UTF-8");
			messageHelper.setTo("wlgh2273@naver.com");
			messageHelper.setText("메일본문");
			messageHelper.setFrom(from);
			messageHelper.setSubject(subject);	// 메일제목은 생략이 가능하다
			
			mailSender.send(message);
		} catch(Exception e){
			System.out.println(e);
		}
		System.out.println("222");
		return "Sucess";
	}
}
