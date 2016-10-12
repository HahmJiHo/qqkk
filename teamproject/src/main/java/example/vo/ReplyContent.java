package example.vo;

import java.io.Serializable;

public class ReplyContent implements Serializable {
	private static final long serialVersionUID = 1L;
  
  protected int no;
  protected int groupNo;
  protected int memberNo;
  protected String name;
	protected String content;
	
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public int getGroupNo() {
		return groupNo;
	}
	public void setGroupNo(int groupNo) {
		this.groupNo = groupNo;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public int getMemberNo() {
		return memberNo;
	}
	public void setMemberNo(int memberNo) {
		this.memberNo = memberNo;
	}
	@Override
	public String toString() {
		return "ReplyContent [no=" + no + ", groupNo=" + groupNo + ", memberNo=" + memberNo + ", name=" + name
				+ ", content=" + content + "]";
	}
	
	
 
	
	
  
}
