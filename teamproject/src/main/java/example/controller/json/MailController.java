package example.controller.json;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import example.dao.MemberDao;
import example.vo.MemberInvite;

@Controller // 페이지 컨트롤러에 붙이는 애노테이션 
@RequestMapping("/sendEmail/")
public class MailController {
	@Autowired MemberDao memberDao;
	@Autowired 
	private JavaMailSender mailSender;
	
	private String from 	= "hahm0418@gmail.com";
	private String subject	= "메일제목 (생략가능)";
	
	@RequestMapping(path="mail")
	public String sendMail(MemberInvite memberInvite) {
		//MemberInvite memberInvite = new MemberInvite();
		System.out.println("111");	
		System.out.println(memberInvite.getInviteEmail());
	/*	String senderNmae = member.getName();*/
		try {
			if (memberDao.selectOneByEmail(memberInvite.getInviteEmail()) == null) {
			MimeMessage message = mailSender.createMimeMessage();
			MimeMessageHelper messageHelper = new MimeMessageHelper(message, true, "UTF-8");
			messageHelper.setTo(memberInvite.getInviteEmail());
			messageHelper.setText("하이바??");
			messageHelper.setFrom(from);
			messageHelper.setSubject("hiba 초대 메일");	// 메일제목은 생략이 가능하다
			
			mailSender.send(message);
			}
		} catch(Exception e){
			System.out.println(e);
		}
		System.out.println("222");
		return "Sucess";
	}
}

/*package example.controller.json;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;

@Controller // 페이지 컨트롤러에 붙이는 애노테이션 
public class Mail2Controller {
	@Autowired private JavaMailSender mailSender;

	private String from 	= "hahm0418@gmail.com";
	private String subject	= "메일제목 (생략가능)";

	public String sendMail(String checkedEmail) {
		System.out.println("호출됨");

		String sendEmailAddr = checkedEmail;
		System.out.println("1" + sendEmailAddr);
		try {
			MimeMessage message = mailSender.createMimeMessage();
			MimeMessageHelper messageHelper = new MimeMessageHelper(message, true, "UTF-8");
			System.out.println("3" + sendEmailAddr);
			messageHelper.setTo(sendEmailAddr);
			messageHelper.setText("메일본문");
			messageHelper.setFrom(from);
			messageHelper.setSubject(subject);		
			mailSender.send(message);

		} catch(Exception e){
			System.out.println("catch 진입");
			System.out.println(e);
		}

		return "Sucess";
	}
}
*/