package example.vo;

import java.io.Serializable;

public class Place implements Serializable {
	private static final long serialVersionUID = 1L;
	
	protected int no;
	protected String placeName;
	protected int like;
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public int getLike() {
		return like;
	}
	public void setLike(int like) {
		this.like = like;
	}
	public String getPlaceName() {
		return placeName;
	}
	public void setPlaceName(String placeName) {
		this.placeName = placeName;
	}
	


	
}
