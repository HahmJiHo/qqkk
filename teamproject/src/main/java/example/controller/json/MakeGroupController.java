package example.controller.json;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import example.dao.MakeGroupDao;
import example.dao.MemberInviteDao;
import example.dao.ReplyContentDao;
import example.dao.ReplyDao;
import example.vo.JsonResult;
import example.vo.MakeGroup;
import example.vo.Member;
import example.vo.MemberInvite;
import example.vo.Reply;
import example.vo.ReplyContent;

@Controller // 페이지 컨트롤러에 붙이는 애노테이션 
@RequestMapping("/group/") // 이 페이지의 컨트롤러의 기준 URL
public class MakeGroupController {
	@Autowired MakeGroupDao makeGroupDao;
	@Autowired MemberInviteDao memberInviteDao;
	@Autowired ReplyDao replyDao;
	@Autowired ReplyContentDao replyContentDao;
	
	
	
	@RequestMapping(path="list")
	public Object list(
			@RequestParam(defaultValue="1") int pageNo,
			@RequestParam(defaultValue="30") int length) throws Exception {
		try {
			HashMap<String,Object> map = new HashMap<>();
			map.put("startIndex", (pageNo - 1) * length);
			map.put("length", length);
			return JsonResult.success(makeGroupDao.selectList(map));
			
		} catch (Exception e) {
	
			return JsonResult.fail(e.getMessage());
		}					
	}
		
	@RequestMapping(path="add")
	public Object add(MakeGroup makeGroup, HttpSession session) throws Exception {
		// 성공하든 실패하든 클라이언트에게 데이터를 보내야 한다.
		Member member = (Member)session.getAttribute("member");
		makeGroup.setEmail(member.getEmail());		
		makeGroupDao.insert(makeGroup);
		System.out.println(makeGroup);	
		try {			
			MemberInvite memberInvite = new MemberInvite();
			// 그룹 생성시 생성자 자동추가
			memberInvite.setGroupNo(makeGroup.getNo());
			memberInvite.setName(makeGroup.getName());					
			memberInvite.setInviteEmail(member.getEmail());
			System.out.println(memberInvite);			
			memberInviteDao.insert(memberInvite);
			
			// 그룹 생성시 그룹 댓글 생성
			Reply reply = new Reply();
			reply.setGroupNo(makeGroup.getNo());
			reply.setMemberNo(member.getNo());
			reply.setName(member.getName());
			System.out.println(reply);		
			replyDao.insert(reply);
			
			// 그룹 댓글 생성시 댓글 콘텐츠 생성
			ReplyContent replyContent = new ReplyContent();
			replyContent.setGroupNo(makeGroup.getNo());
			replyContent.setMemberNo(member.getNo());
			replyContent.setName(member.getName());
			replyContent.setContent("그룹을 만들었습니다.");
			System.out.println(replyContent);		
			replyContentDao.insert(replyContent);
			
			return JsonResult.success();
			
		} catch (Exception e) {
			
			return JsonResult.fail(e.getMessage());
		}						
	}
	
	@RequestMapping(path="detail")
	public Object detail(int no) throws Exception{
		
		try {
			MakeGroup makeGroup = makeGroupDao.selectOne(no);
			
			if (makeGroup == null)
				throw new Exception("해당 번호의 게시물이 존재하지 않습니다.");
			return JsonResult.success(makeGroup);
			
		} catch (Exception e) {
			return JsonResult.fail(e.getMessage());
		}		
		
	}
	
	
	@RequestMapping(path="update")
	public Object update(MakeGroup makeGroup) throws Exception{

		try {
			HashMap<String,Object> paramMap = new HashMap<>();
			paramMap.put("no", makeGroup.getNo());

			if (makeGroupDao.selectOneByPassword(paramMap) == null) {
				throw new Exception("해당 게시물이 없거나 암호가 일치하지 않습니다.!");
			}
			makeGroupDao.update(makeGroup);
			return JsonResult.success();
		} catch (Exception e) {
			
			return JsonResult.fail(e.getMessage());
		}					
		
	}
	
		@RequestMapping(path="delete")
		public Object delete(int no) throws Exception {
			try {
				if (makeGroupDao.delete(no) == 0) {
					throw new Exception("삭제 실패입니다");
				}
				makeGroupDao.delete(no);
				return JsonResult.success();
	
			} catch (Exception e) {
				return JsonResult.fail(e.getMessage());
			}	
		}
	
}
