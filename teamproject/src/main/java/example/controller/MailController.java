package example.controller;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/member/")
public class MailController {
	@Autowired 
	private JavaMailSender mailSender;
	
	private String from 	= "hahm0418@gmail.com";
	private String subject	= "메일제목 (생략가능)";
	

	public String sendMail() {
		System.out.println("1111");
		try {
			
			System.out.println("222");

			MimeMessage message = mailSender.createMimeMessage();
			MimeMessageHelper messageHelper = new MimeMessageHelper(message, true, "UTF-8");
			messageHelper.setTo("hahm0418@gmail.com");
			messageHelper.setText("메일본문");
			messageHelper.setFrom(from);
			messageHelper.setSubject(subject);	// 메일제목은 생략이 가능하다
			
			mailSender.send(message);
		} catch(Exception e){
			System.out.println(e);
		}
		
		return "Sucess";
	}
}
